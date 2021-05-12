import React, { useEffect, useState } from "react";
import { useHistory, Route } from "react-router-dom";


import config from "../../config";

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const history = useHistory();
  
  const demos = {
    searchRecipies:
      '<iframe width="1650px" height="1000px" scrolling="yes" frameborder="yes" src='+config.searchUrl+'></iframe>',
      // '<iframe height="100%": width="100%" scrolling="yes" frameborder="yes" src='+config.searchUrl+'></iframe>',
  };

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Are you sure to logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };

  useEffect(() => {
    fetch(`${config.baseUrl}/api/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(({ error, data }) => {
        data.title="Search your recipes below!"
        data.content="."
        console.log(data)
        error ? history.push("/login") : setDashboard(data)
      });
  }, [history]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          FOODIE RECIPE APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="/dashboard">
                Dashboard <span className="sr-only">(current)</span>
              </a> */}
            </li>
            <li className="nav-item">
              <span
                className="nav-link cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </span>
            </li>
          </ul>
          <span className="navbar-text">Welcome! {dashboard?.user?.name}</span>
        </div>
      </nav>
      <div className="px-3">
        <h1>{dashboard?.title}</h1>
        <p>{dashboard?.content}</p>
        <Iframe iframe={demos["searchRecipies"]}/>
      </div>
    </>
  );
};

export default Dashboard;
