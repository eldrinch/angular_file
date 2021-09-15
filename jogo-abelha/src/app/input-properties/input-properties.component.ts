import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css'],
})
export class InputPropertiesComponent {
  @Input() rating: number = 1;
  @Output() RatingChange = new EventEmitter<number>();

  onClick(i: number) {
    this.RatingChange.emit(i);
  }
}
