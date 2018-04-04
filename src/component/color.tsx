import * as React from 'react';

interface Props {
    numcode: string;
}
export class Code extends React.Component<Props> {
 public render() {
        return (
            <p style={{backgroundColor: 'white', textAlign: 'centre'}}>
            {this.props.numcode}</p>
        );
    }
}
