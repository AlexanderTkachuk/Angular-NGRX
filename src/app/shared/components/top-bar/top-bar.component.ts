import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();
  constructor() { }
}
