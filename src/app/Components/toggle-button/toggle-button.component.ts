import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Input() count: number;
  @Output() quantityChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.count += 1;
    this.quantityChanged.emit(this.count);
  }

  remove() {
    if (this.count >= 1) {
      this.count -= 1;
      this.quantityChanged.emit(this.count);
    }
  }
}
