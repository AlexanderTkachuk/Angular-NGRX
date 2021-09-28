import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }
  public range(start: number, end: number) {
    return [...Array(end).keys()].map((num: number) => num + start);
  }
}
