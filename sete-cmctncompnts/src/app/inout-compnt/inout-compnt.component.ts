import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inout-compnt',
  templateUrl: './inout-compnt.component.html',
  styleUrls: ['./inout-compnt.component.css'],
})
export class InoutCompntComponent {
  @Input() rating: number = 1;
  // @Output() onRatingChange = new EventEmitter<number>();
  @Output() ratingChange = new EventEmitter<number>();
  onClick(i: number) {
    this.ratingChange.emit(i);
  }
}
