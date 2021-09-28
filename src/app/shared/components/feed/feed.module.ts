import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [FeedComponent, DateFormatterPipe],
  imports: [CommonModule, MaterialModule, PaginationModule, RouterModule],
  exports: [FeedComponent]
})
export class FeedModule { }
