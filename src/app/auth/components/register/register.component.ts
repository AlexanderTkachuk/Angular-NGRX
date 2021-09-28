import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {isSubmittingSelector, validationErrorsSelector} from 'src/app/auth/store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInerface } from 'src/app/shared/types/backendErrors.interface';
import { registerAction } from '../../store/actions/register-actions';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInerface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)] ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register(): void {
    const request: RegisterRequestInterface = {  user: this.registerForm.value };
    this.store.dispatch(registerAction({request}));
  }
}
