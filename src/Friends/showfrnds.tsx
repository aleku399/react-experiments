import * as React from 'react';

export interface Props {
    names: string[];
}
export class ShowFrnds extends React.Component<Props> {

   public render() {
        const listedItem = this.props.names.map((name) => {
            return <li key={name}> {name} </li>;
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul> {listedItem}</ul>
            </div>
        );
    }
}
