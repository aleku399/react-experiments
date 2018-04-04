import * as React from 'react';

export interface Props {
    ingredients: Array<{name: string, amount: number, measurement: string}>;
    steps: string[];
    title: string;
    name: string;
}
export class Recipe extends React.Component<Props> {
    public render() {
        const list = this.props.ingredients.map((ingredient) => {
           return <li key={ingredient.name}>{ingredient.name}</li>;
        });
        const para = this.props.steps.map((step, i) => {
          return  <p key={i}>{step}</p>;
        });
        return (
            <section id={this.props.name.toLowerCase().replace(/ /g, '-')}>
                <h1>{this.props.title}</h1>
                <ul>
                    {list}
                </ul>
                <section className="instructions">
                    <h2>Cooking Instructions</h2>
                    {para}
                </section>
            </section>
        );
    }
}
