import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../types/currentUser.interface';
import { BackendErrorsInerface } from '../../types/backendErrors.interface';
import { isLoggedInSelector, isAnonymousSelector, currentUserSelector, validationErrorsSelector } from 'src/app/auth/store/selectors';
import { clearAuthErrors, logoutAction } from 'src/app/auth/store/actions/clear-actions';
import { PersistentService } from '../../services/persistent.service';

@Component({
  selector: 'mc-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isAnonymous$: Observable<boolean>;
  public currentUser$: Observable<CurrentUserInterface | null>;
  private backendErrors$: Observable<BackendErrorsInerface>;

  public routeLinks = [
    { link: '/home', name: 'Home', icon: 'home' },
    { link: '/settings', name: 'Settings', icon: 'settings' },
    { link: '/global-feed', name: 'Feed', icon: 'feed' },

  ];
  constructor(private store: Store, private router: Router, private persistentService: PersistentService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  navigate(route: '/login' | '/register', userName?: any): void {
    this.router.navigateByUrl(route, { queryParams: { userName } });
    this.backendErrors$.pipe(take(1)).subscribe((errors: BackendErrorsInerface) => {
      if (errors !== null && Object.keys(errors).length) {
        this.store.dispatch(clearAuthErrors());
      }
    });
  }
  logout(): void {
    this.store.dispatch(logoutAction());
    this.persistentService.remove(('accessToken'));
    this.router.navigateByUrl('/login');
  }
}
