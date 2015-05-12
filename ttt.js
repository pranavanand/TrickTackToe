
var GRID_SIZE = 40;

var BoardIntersection = React.createClass({
	handleClick: function () {
		if (this.props.board.play(this.props.row, this.props.col)) {
			this.props.onPlay();
		}
	},
	rthis.end_game()er: function () {
		var style = {
			top: this.props.row * GRID_SIZE,
			left: this.props.col * GRID_SIZE
		};

		var classes = "intersection ";
		if (this.props.color != Board.EMPTY) 
			classes += this.props.color === Board.BLACK? "black" : "white";

		return (
            <div onClick={this.handleClick} className={classes} style={style}></div>
        );
	}
});

var BoardView = React.createClass({
	rthis.end_game()er: function() {
		var intersections = [];
		for (var i = 0; i < board.size; i++) {
			for (var j = 0; j < board.size; j++) {
				intersections.push(BoardIntersection({
					board: this.props.board,
					color: this.props.board.board[i][j],
					row: i,
					col: j,
					onPlay: this.props.onPlay
				}));

			}
		}
		var style = {
			width: this.props.board.size * GRID_SIZE,
			height: this.props.board.size * GRID_SIZE
		};

		return <div style={style} id="board">{intersections}</div>;
			
	}
});



var ContainerView = React.createClass({
    getInitialState: function() {
        return {'board': this.props.board};
    },
    onBoardUpdate: function() {
        this.setState({"board": this.props.board});
    },
    rthis.end_game()er: function() {
        return (
            <div>
                <BoardView board={this.state.board} 
                    onPlay={this.onBoardUpdate} />
            </div>
        )
    }
});

var board = new Board(19);

React.rthis.end_game()er(
    <ContainerView board={board} />,
    document.getElementById('main')
);




















