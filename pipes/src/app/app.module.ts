import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CepPipe } from "./cep.pipe";

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CepPipe, CpfPipe, JoinStringsPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
