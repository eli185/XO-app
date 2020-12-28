import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../gameService/gameService';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    theme = 'normal';
    player2Name = '';
    player1Name = '';


    constructor(private router: Router, private gameService: GameService, private elementRef: ElementRef){
    }

    onPlayClick() {
        this.gameService.theme = this.theme;
        this.gameService.player1Name = this.player1Name;
        this.gameService.player2Name = this.player2Name;

        this.router.navigate(['/game']);
    }

    changeTheme() {
        if (this.theme === 'Normal') {
            this.elementRef.nativeElement.style.setProperty('--main-color', 'white');
            this.elementRef.nativeElement.style.setProperty('--font-color', 'black');
            this.elementRef.nativeElement.style.setProperty('--button-color', 'lightblue');
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
        }
        else{
            this.elementRef.nativeElement.style.setProperty('--main-color', 'black');
            this.elementRef.nativeElement.style.setProperty('--font-color', 'white');
            this.elementRef.nativeElement.style.setProperty('--button-color', 'grey');
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
        }
    }
}
