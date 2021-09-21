import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "pipes";

  text = "Pratica-de-Pipes";
  n = 12050.4983;
  hoje = new Date();
  meuCep = "02931040";
  cpf = "88877766655";
  strings: string[] = ["gato", "cavalo"];

  addString(newString) {
    this.strings.push(newString);
  }
}
