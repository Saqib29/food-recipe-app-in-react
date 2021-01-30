import React from 'react'
import style from './recipes.module.css';

export default function Recipe({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{ title }</h1>            
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt=""/>
            <p><strong>Calories:</strong> { calories } calories</p>
        </div>
    )
}
