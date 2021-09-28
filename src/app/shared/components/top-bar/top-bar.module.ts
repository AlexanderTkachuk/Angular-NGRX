import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
