import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTagsAction } from './store/actions';
import { isLoadingSelector, errorFeedSelector, tagsDataSelector } from './store/selectors';

@Component({
  selector: 'mc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  public tags$: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.store.dispatch(getTagsAction());
  }
  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorFeedSelector));
    this.tags$ = this.store.pipe(select(tagsDataSelector));
  }
  public selectTag(tag: string) {
    console.log(tag);
  }
}
