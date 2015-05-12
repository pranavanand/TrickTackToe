//game logic in vanilla js

"use strict";
var Board = function (size) {
	this.current_color = Board.BLACK;
	this.size = size;
	this.board = this.create_board(size);
	this.in_atari = false;

};

Board.EMPTY = 0;
Board.BLACK = 1;
Board.WHITE = 2;

Board.prototype.create_board = function(size) { //initializes to empty
	var m = [];
	for (var i = 0; i < size; i++) {
		m[i] = [];
		for (var j = 0; j < size; j++)
			m[i][j] = Board.EMPTY;
	}
	return m;
};

Board.prototype.switch_player = function() {
	if (this.current_color == Board.BLACK) {
		this.current_color = Board.WHITE;
	} else {
		this.current_color = Board.BLACK;
	}
};


Board.prototype.check_victory = function(i, j) {
	var counter = 0;
	var colour = this.current_color;
	var cursori = i;
	var cursorj = j;
	console.log(cursori);

	while ((cursori) < this.size) { //vertical down victory
		if (this.board[cursori][j] === colour) {
			counter++;
			cursori++;
		} 

		if (counter == 4) {
			this.end_game();
			return;
		}

		if (cursori >= this.size || this.board[cursori][j] != colour) {
			break;
		}
	}
	
	
	
	cursori = i;
	counter--;

	while (cursori >= 0) { //vertical up victory
		if (this.board[cursori][j] === colour) {
			counter++;
			cursori--;
		} else if (counter == 4) {
			this.end_game();
			return;
		} else {
			break;
		}
	}
	
	cursori = i;
	counter = 0; 

	while (cursorj >= 0) { //horizontal right victory

		if (this.board[i][cursorj] === colour) {
			counter++;
			cursorj++;
		} 
		if (counter == 4) {
			this.end_game();
			return;
		} 
		if (cursorj >= this.size || this.board[i][cursorj] != colour) {
			break;
		}
	}

	

	cursorj = j;
	counter --;

	while (cursorj < this.size) { //horizontal left victory 
		if (this.board[i][cursorj] === colour) {
			counter++;
			if (counter == 4) {
				this.end_game();
				return;
			} 
			cursorj--;
		} else {
			break;
		}
		
		
	}
	
	cursori = i;
	cursorj = j;
	counter = 0;

	while ((cursorj < this.size) && (cursori < this.size)) { //down right diagonal victory
		
		if (this.board[cursori][cursorj] === colour) {
			counter++;
			if (counter == 4) {
				this.end_game();
				return;
			}
			cursorj++;
			cursori++;
		} else {
			break;
		}
	}

	cursori = i;
	cursorj = j;
	counter --;

	while (cursorj > 0 && cursori > 0) { //forward diagonal continued in other direction
		if (this.board[cursori][cursorj] === colour) {
			counter++;
			if (counter == 4) {
				this.end_game();
				return;
			}
			cursorj--;
			cursori--;
		} else {
			break;
		}
	}

	cursori = i;
	cursorj = j;
	counter = 0;

	while (cursorj < this.size && cursori < this.size) { //forward diagonal
		if (this.board[cursori][cursorj] === colour) {
			counter++;
			if (counter == 4) {
				this.end_game();
				return;
			}
			cursorj++;
			cursori--;
		} else {
			break;
		}
	}

	cursori = i;
	cursorj = j;
	counter --;

	while (cursorj > 0 && cursori > 0) { //forward diagonal continued in other direction
		if (this.board[cursori][cursorj] === colour) {
			counter++;
			if (counter == 4) {
				alert("runss");
				this.end_game();
			}
			cursorj--;
			cursori++;
		} else {
			break;
		}
	}

	return 0;
}
var winner;
winner = this.current_color === Board.BLACK? "black" : "white";
Board.prototype.end_game = function () {
	alert("gaem 0v3r " + winner + " w1ns!");
}

Board.prototype.play = function(i, j) {
	//console.log("Played at " + i + ", " + j + ".");
	if (this.board[i][j] != Board.EMPTY) return false;
	var color = this.board[i][j] = this.current_color;
	if (this.check_victory(i, j)) this.end_game;
    this.switch_player();
    return true;
};
