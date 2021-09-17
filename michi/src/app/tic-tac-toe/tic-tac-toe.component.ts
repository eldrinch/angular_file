import { Component } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-tic-tac-toe",
  templateUrl: "./tic-tac-toe.component.html",
  styleUrls: ["./tic-tac-toe.component.css"],
})
export class TicTacToeComponent {
  currentPlayer: string = "O";
  winner: string = "";
  board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  producao = environment.production;
  //recebendo o paramentro de onde esta a jogada e jogador
  processPlay(line: number, col: number) {
    if (this.board[line][col] == "" && this.winner == "") {
      this.board[line][col] = this.currentPlayer;
      //verificar o vencedor

      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      //trocando o jogador
      if (this.currentPlayer == "O") {
        this.currentPlayer = "X";
      } else {
        this.currentPlayer = "O";
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      //verificando se cada linha é prenchida pelo mesmo jogador
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    //verificando se cada coluna é prenchida pelo mesmo jogador
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    //verificando a primeira diagonal é prenchida pelo mesmo jogador
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
        return true;
      }
    }
    //verificando a segunda diagonal é prenchida pelo mesmo jogador
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
        return true;
      }
    }

    return false;
  }

  reset() {
    this.currentPlayer = "O";
    this.winner = "";
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }
}
