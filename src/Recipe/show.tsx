import * as React from 'react';
import {Recipe} from './recipe';

interface Props {
    recipes: any;
    heading: string;
}
export class Show extends React.Component<Props>  {
 public  render() {
        const arr = this.props.recipes.map((obj, index) => {
        return <Recipe
                key={index}
                title={obj.title}
                ingredients={obj.ingredients}
                steps={obj.steps}
                name={obj.name}
        />;
        });
        return (
            <article>
                <header>
                    <h1>{this.props.heading}</h1>
                </header>
                <div>
                    {arr}
                </div>
            </article>
        );
    }
}
