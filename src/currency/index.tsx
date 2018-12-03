import * as React from 'react';
import { Convert } from './convert';

const multiply  = ( variable, coefficient )  => {
return ( Math.round( (variable * coefficient) ) ).toString();
};

function tryConvert( value, rate ) {
const variable = parseFloat(value);
const coefficient = parseFloat(rate);
return Number.isNaN(variable) ? '' : (multiply(variable, coefficient)).replace('.', ',');
}

export interface State {
  symbols: any[];
  from: string;
  to: string;
  rate: number;
  inputCurrency: string;
  outputCurrency: string;
  value: string;
}
export class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      symbols: [],
      from: 'USD',
      to: 'UGX',
      inputCurrency: '?',
      outputCurrency: '?',
      rate: 1,
      value: ''
    };
    this.updateValue = this.updateValue.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
    this.updateCurrency = this.updateCurrency.bind(this);
  }

  public async componentDidMount() {
    this.onfetchCountries();
  }

  public onfetchCountries() {
    fetch('https://free.currencyconverterapi.com/api/v5/countries')
      .then(res => res.json())
      .then(json => {
        const keys = Object.keys(json.results);
        const symbols = keys.map((objKey: string) => {
          const { currencyId, currencySymbol, country, key } = json.results[
            objKey
          ];
          return {
            currencyId,
            currencySymbol,
            country,
            key
          };
        });
        this.setState({ symbols });
      })
      .catch(error => console.log('parsing failed', error));
  }

  public onCalculate(inputCurrency: string, value: string) {
    const { from, to} = this.state;
    const outputCurrency = inputCurrency === from ? to : from;
    fetch(
      `https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        const key = Object.keys(json)[0];
        const {val} = json[key];
        console.log(val);
        this.setState({ rate: val, value, inputCurrency, outputCurrency });
      })
      .catch(err => console.log(err));
  }

  public updateValue(value) {this.setState({value}); }

  public updateCurrency(currency, position) {
    this.setState({value: '', rate: 1, inputCurrency: '', outputCurrency: ''});
    if (position === 1) this.setState({from: currency});
    if (position === 2) this.setState({to: currency});
  }

  public render() {
    const { symbols, from, to, inputCurrency, rate, value } = this.state;
    const value1 = from === inputCurrency ? value : tryConvert(value, rate);
    const value2 = to === inputCurrency ? value : tryConvert(value, rate);
    return (
      <div id="container">
        <Convert
            symbols={symbols}
            position={1}
            selected={from}
            valueInput={value1}
            onInputClick={this.onCalculate}
            onInputChange={this.updateValue}
            onCurrencyChange={this.updateCurrency}
        />
        <Convert
            symbols={symbols}
            position={2}
            selected={to}
            valueInput={value2}
            onInputClick={this.onCalculate}
            onInputChange={this.updateValue}
            onCurrencyChange={this.updateCurrency}
        />
      </div>
    );
  }
}
