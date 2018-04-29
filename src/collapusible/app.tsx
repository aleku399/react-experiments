import * as React from 'react';
import {Collapse} from './collapse';

interface Contact {
name: string;
region: string;
gender: string;
surname: string;
}
export interface State {
    contacts: Contact[];
}
// the first type paremeter is always the Props type, in case its not available you supply {}
export class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = ({
            contacts: []
        });
    }
    public componentDidMount() {
        this.onfetch();
    }
    public onfetch() {
        fetch('https://uinames.com/api/?amount=5')
        .then(res => res.json())
        .then(_data => _data.map( (user: Contact) => (
            {
                name: `${user.name} ${user.surname}`,
                region: user.region,
                gender: user.gender
            }
        ))).then( (contacts: Contact[]) => this.setState({
            contacts
        }))
        .catch(error => console.log('parsing failed', error));
    }
    public render() {
        const {contacts} = this.state;
        return(
            <div>
                {contacts.length > 0 ? contacts.map(contact =>
                        <Collapse key={Date.now()} title={contact.name}>
                        <p>{contact.gender}<br />
                        {contact.region}</p>
                     </Collapse>
            ) : ''}
            </div>
        );
    }
}
