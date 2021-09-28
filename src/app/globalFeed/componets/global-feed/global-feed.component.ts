import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalFeedComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector));
  public apiUrl = '/articles';
  constructor(private store: Store) { }
  ngOnInit(): void {

  }

  selectTag(tag: string) {
    console.log(tag);
  }

}
