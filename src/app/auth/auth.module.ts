import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {reducers} from 'src/app/auth/store/reducers';
import {AuthService} from 'src/app/auth/services/auth.service';
import { RegisterEffect } from './store/effects/register-effects';
import { LoginEffect } from './store/effects/login-effect';
import { CurrentUserEffect } from './store/effects/current-user.effect';

const routes = [
  {path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, CurrentUserEffect])
  ],
  declarations: [],
  providers: [AuthService]
})
export class AuthModule {}
