import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jogo-abelha';

  movies = [
    { title: 'Os vingadores', rating: 5 },
    { title: 'Joias Brutas', rating: 3 },
    { title: 'Parasita', rating: 5 },
    { title: 'O Irlandes', rating: 4 },
    { title: 'Pantera Negra', rating: 4 },
  ];
}
