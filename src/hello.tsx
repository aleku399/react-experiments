import * as React from 'react';

interface Props {
    name: string;
}

export class Hello extends React.Component<Props> {
    public render() {
        return(
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
