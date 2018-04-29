import * as React from 'react';

interface Props {
    title: string;
    children: any;
}
interface State {
    selected: boolean;
}
export class Collapse extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {selected: false};
        this.onToggle = this.onToggle.bind(this);
    }
    public onToggle(event) {
        event.preventDefault();
        this.setState({selected: !this.state.selected});
    }
    public render() {
        const classItem = 'panel' + (this.state.selected ? 'Show' : 'Not');
        return(
            <div className="panel-group"  onClick={this.onToggle}>
                <div className="panel-heading">
                    <h2>{this.props.title}</h2>
                </div>
                <div className={classItem}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}
