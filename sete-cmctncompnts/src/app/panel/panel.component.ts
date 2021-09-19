import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  expanded: boolean = true;

  @Input() title: string;

  expand() {
    this.expanded = true;
  }
  contract() {
    this.expanded = false;
  }
}
