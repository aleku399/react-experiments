import * as React from 'react';
import {ShowFrnds} from './showfrnds';

export class Friends extends React.Component {
    public state: {
        friends: string[];
        name: string;
    };
    private _name: any;
    constructor(props) {
        super(props);
        this.state = {
            name: 'Chris Coleman',
            friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
        };
        this.addFriend = this.addFriend.bind(this);
    }
 public addFriend() {
        const arrFrnds = this.state.friends;
        const name = this._name.value;
        arrFrnds.push(name);
        this.setState({
            friends: arrFrnds
        });
    }
  public  render() {
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <button onClick={this.addFriend}>Add</button>: <input type="text" ref={input => this._name = input} />
                < ShowFrnds names={this.state.friends}/>
            </div>
        );
    }
}
