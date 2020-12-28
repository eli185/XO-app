import { Component } from '@angular/core';
import {GameService} from '../gameService/gameService';


export class Player {
    name: string;
    sign: string;
    score: number;
}

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
    table = [];
    player1: Player;
    player2: Player;
    playingPlayer: Player;
    winingPlayer = '';
    tableSize = 9;

    constructor(private gameService: GameService) {
        this.table = Array(this.tableSize).fill('');
        this.player1 = {name: this.gameService.player1Name, sign: 'X', score: 0};
        this.player2 = {name: this.gameService.player2Name, sign: 'O', score: 0};
        this.playingPlayer = this.player1;
    }

    Play(i: number) {
        if (this.table[i] === '' && this.winingPlayer === '') {
            this.table[i] = this.playingPlayer.sign;
            this.checkWin(this.playingPlayer);
            this.playingPlayer = this.playingPlayer === this.player1 ? this.player2 : this.player1;
        }
    }

    onPlayAgainClick() {
        this.table = Array(this.tableSize).fill('');
        this.playingPlayer = this.player1;
        this.winingPlayer = '';
    }

    checkWin(playingPlayer) {
        // check rows
        if (this.isEqual(this.table[0], this.table[1] , this.table[2], playingPlayer.sign) ||
            (this.isEqual(this.table[3], this.table[4], this.table[5], playingPlayer.sign)) ||
            (this.isEqual(this.table[6], this.table[7], this.table[8], playingPlayer.sign))) {
            this.winingPlayer = playingPlayer.name;
        }
        // check columns
        if ( (this.isEqual(this.table[0], this.table[3], this.table[6], playingPlayer.sign)) ||
            (this.isEqual(this.table[1], this.table[4], this.table[7], playingPlayer.sign)) ||
            (this.isEqual(this.table[2], this.table[5], this.table[8], playingPlayer.sign))) {
            this.winingPlayer = playingPlayer.name;
        }
        // check slant
        if ( (this.isEqual(this.table[0], this.table[4], this.table[8], playingPlayer.sign)) ||
            (this.isEqual(this.table[2], this.table[4], this.table[6], playingPlayer.sign))) {
            this.winingPlayer = playingPlayer.name;
        }
        if (this.winingPlayer !== ''){
            playingPlayer.score++;
        }
    }

    isEqual(cell1, cell2, cell3, playerSign: string) {
        return (cell1 === playerSign && cell2 === playerSign && cell3 === playerSign);
    }
}
