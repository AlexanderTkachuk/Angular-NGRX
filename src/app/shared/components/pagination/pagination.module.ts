import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { UtilsService } from '../../services/utils.service';



@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  providers: [UtilsService],
  exports: [PaginationComponent]
})
export class PaginationModule { }
