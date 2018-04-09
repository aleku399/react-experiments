import * as React from 'react';
import {Code} from './color';

const colorsArr = ['#393E41', '#E94F37', '#1C89BF', '#A1D363',
'#85FFC7', '#297373', '#FF8552', '#A40E4C'];

interface Props {
    bgColor: string;
}
class Palette extends React.Component<Props> {
 public render() {
        const myStyle = {
            backgroundColor: this.props.bgColor,
            display: 'block',
            height: '200px',
            width: '150px',
            filter: 'drop-shadow(0px 0px 5px red)',
            padding: '0px'
        };

        return(
            <div className="palette">
                <span style={myStyle}>Alex</span>
                <Code numcode={myStyle.backgroundColor}/>
            </div>
        );
    }
}

export const colorListItems = (colors: string[]) =>
    colors
      .map( (color) => <li key={color} >{<Palette bgColor={color} />}</li>);

export default colorListItems(colorsArr);
