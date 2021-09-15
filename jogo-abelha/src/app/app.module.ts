import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    InputPropertiesComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
