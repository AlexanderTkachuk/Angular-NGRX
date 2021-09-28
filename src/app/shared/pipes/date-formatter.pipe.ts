import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'dateFormatter',
  pure: true
})
export class DateFormatterPipe implements PipeTransform {
  transform(date: string) {
    return moment(date).format('MM/DD/YYYY');
  }
}
