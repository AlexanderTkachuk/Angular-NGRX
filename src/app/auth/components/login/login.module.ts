import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersistentService } from 'src/app/shared/services/persistent.service';

const routes: Routes = [{path: '', component: LoginComponent}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [PersistentService],
  exports: [RouterModule]
})
export class LoginModule { }
