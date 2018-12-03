import * as React from 'react';
import Cell from './cell';

export interface Props {
    height: any;
    width: any;
    cellSize: number;
}

export interface State {
    cells: any;
}
export class Container extends React.Component<Props, State> {
   private board: any;
   private boardRef: any;
   constructor(props) {
    super(props);
    this.board = this.makeBoard;
    this.state = {cells: []};
    this.makeBoard = this.makeBoard.bind(this);
    this.makeCells = this.makeCells.bind(this);
    this.getElementOffset = this.getElementOffset.bind(this);
    this.handleClick = this.handleClick.bind(this);
   }

   public makeBoard() {
    const board: any = [];
    for (let y = 0; y < this.props.height / this.props.cellSize; y++) {
        board[y] = [];
        for (let x = 0; x < this.props.width / this.props.cellSize; x++) {
            board[y][x] = false;
        }
    }
    return board;
   }

   public makeCells() {
    const cells: any = [];
    for (let y = 0;  y < this.props.height / this.props.cellSize; y++) {
        for (let x = 0; x < this.props.width / this.props.cellSize; x++) {
            if (!this.board[y][x]) cells.push({ x, y });
        }
    }
    return cells;
   }

   public getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    const doc: any = document.documentElement;
    console.log(`doc: ${doc.clientLeft}`);
    // console.log(`rect: ${rect}`);
    return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    public handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;

        const x = Math.floor(offsetX / this.props.cellSize);
        const y = Math.floor(offsetY / this.props.cellSize);

        if (x >= 0 && x <= this.props.width / this.props.cellSize
            && y >= 0 && y <= this.props.height / this.props.cellSize) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
    }
   public render() {
       const { cells } = this.state;
       return (
        <div
            className="Board"
            ref={(n) => this.boardRef = n}
            onClick={this.handleClick}
            style={{
                width: this.props.width,
                height: this.props.height,
                backgroundSize: `${this.props.cellSize}px ${this.props.cellSize}px`
            }}
        >
                {cells.map(cell => (
                        <Cell
                            x={cell.x}
                            y={cell.y}
                            cellSize={this.props.cellSize}
                            key={`${cell.x},${cell.y}`}
                        />
                ))}
        </div>
        );
    }
}
