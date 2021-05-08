import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Home = (props: { name: string, setRecipesList: (recipesList: [{}]) => void }) => {
    const [inputText, setInputText] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i="+inputText, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const content = await response.json();

        setRedirect(true);
        props.setRecipesList(content);
    }  
    if (redirect) {
        return <Redirect to="/recipes"/>;
    }
    let display;
    if (props.name) {
        display=(
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <input type="text" className="form-control" placeholder="Search Recipes" required
                            onChange={e => setInputText(e.target.value)}
                        />
                        <Button variant="contained" color="primary" type="submit">Search</Button>
                    </form>
                )
    } else {
        display=<h1>You are not logged in!</h1>
    }

    return (
        <div>
            {/* {props.name ? 'Hi ' + props.name : 'You are not logged in'}
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="text" className="form-control" placeholder="Search Recipes" required
                    onChange={e => setInputText(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">Search</Button>
            </form> */}

            {
                display
            }
        </div>
        
    );
};

export default Home;
