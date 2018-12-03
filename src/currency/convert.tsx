import * as React from 'react';
import SelectCurrency, { Currency } from './selectCurrency';

export type Others = Currency & {
  currencySymbol: string;
  country: string;
};
export interface Props {
  symbols: Others[];
  selected: string;
  valueInput: string;
  position: number;
  onInputChange: any;
  onInputClick: any;
  onCurrencyChange: any;
}

export class Convert extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  public handleInputClick(e) {
    this.props.onInputClick(this.props.selected, e.target.value);
  }

  public handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }

  public handleCurrencyChange(e) {
    this.props.onCurrencyChange(e.target.value, this.props.position);
  }
  public render() {
    const container = this.props.symbols.map((obj: Others, index) => {
    if (obj.currencyId === this.props.selected) {
      return <SelectCurrency key={obj.key}  currencyId={obj.currencyId} />;
    } else {
        return <SelectCurrency key={obj.key}  currencyId={obj.currencyId} />;
    }
    });
    return (
      <fieldset id="currency">
        <legend>{this.props.selected}</legend>
        <input
          value={this.props.valueInput}
          onChange={this.handleInputChange}
          onClick={this.handleInputClick}
        />
        <select onChange={this.handleCurrencyChange}>{container}</select>
      </fieldset>
    );
  }
}
