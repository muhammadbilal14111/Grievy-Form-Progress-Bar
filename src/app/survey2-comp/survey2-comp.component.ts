import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-survey2-comp',
  templateUrl: './survey2-comp.component.html',
  styleUrls: ['./survey2-comp.component.scss'],
})
export class Survey2CompComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Output() changeEvent = new EventEmitter();

  handleChange() {
    this.changeEvent.emit();
  }
}
