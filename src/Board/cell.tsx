import * as React from 'react';

export default ({x , y, cellSize}) => {
    return (
        <div
            className="Cell"
            style={{
                left: `${cellSize * x + 1}px`,
                top: `${cellSize * y + 1}px`,
                width: `${cellSize - 10}px`,
                height: `${cellSize - 10}px`
            }}
        />
   );
};
