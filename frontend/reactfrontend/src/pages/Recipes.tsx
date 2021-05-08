import React, {SyntheticEvent, useState} from 'react';

const Recipes = (props: {recipesList: [{}]}) => {
    return(
        <div>
        {props.recipesList.length > 0 ? props.recipesList : 'You are not logged in'}
        </div>
    )
};

export default Recipes;