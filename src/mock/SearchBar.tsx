import * as React from 'react';

export interface Props {
    checked: boolean;
    filterText: string;
    handleFilterText: (arg) => void;
    handleChecked: (arg) => void;
}
export class SearchBar extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.onFilterText = this.onFilterText.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }
    public onFilterText(event) {
        this.props.handleFilterText(event.target.value);
    }
    public onChecked(event) {
        this.props.handleChecked(event.checked.value);
    }
    public render() {
        return ( <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.props.filterText}
                        onChange={this.props.handleFilterText}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={this.props.checked}
                            onChange={this.props.handleChecked}
                        />
                        Only show products in stock
                    </label>
                </div>
                );
    }
}
