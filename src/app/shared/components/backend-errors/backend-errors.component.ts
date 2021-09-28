import { Component, OnInit, Input } from '@angular/core';
import { BackendErrorsInerface } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss']
})
export class BackendErrorsComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInerface | null;
  public backendErrorMessages: string[];
  constructor() { }

  ngOnInit(): void {
    this.backendErrorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[`${name}`].join(', ');
      return `${name}: ${messages}`;
    });
  }

}
