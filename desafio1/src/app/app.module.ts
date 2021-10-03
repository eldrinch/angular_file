import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { SelecaoComponent } from './selecao/selecao.component';

@NgModule({
  declarations: [AppComponent, SelecaoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
