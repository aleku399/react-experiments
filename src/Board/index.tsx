import * as React from 'react';
import {Container} from './board';

export interface State {
    // height: number;
    // width: number;
    cellSize: number;
}

export class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = ({
            // height,
            // width,
            cellSize: 50
        });
    }

    public render() {
        const height = Number(prompt('Enter height'));
        const width = Number(prompt('Enter width'));
        const {cellSize} = this.state;
        return(
            <div>
                <Container height={height} width={width} cellSize={cellSize}/>
            </div>
        );
    }
}
