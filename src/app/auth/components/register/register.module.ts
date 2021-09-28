import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersistentService } from 'src/app/shared/services/persistent.service';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [PersistentService],
  exports: [RouterModule],
})
export class RegisterModule { }
