import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {GameComponent} from './game-component/game.component';
import {HomeComponent} from './home-component/home.component';

@NgModule({
  declarations: [
    AppComponent, GameComponent, HomeComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: '', component: HomeComponent},
            {path: 'game', component: GameComponent}
        ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
