import * as React from 'react';

export interface Currency {
    currencyId: string;
    key: string;
}
export default (item: Currency) => {
    return (
        <option key={item.key} value={item.currencyId}>
            {item.currencyId}
        </option>
   );
};
