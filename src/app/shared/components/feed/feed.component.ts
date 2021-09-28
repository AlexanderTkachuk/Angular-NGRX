import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {parseUrl, stringify} from 'query-string';

import { environment } from 'src/environments/environment';
import { getFeedAction } from 'src/app/globalFeed/store/actions';
import { GetFeedResponseInterface } from 'src/app/globalFeed/types/getFeedResponse.interface';
import { isLoadingSelector, errorFeedSelector, feedDataSelector } from 'src/app/globalFeed/store/selectors';
import { ArticleInterface } from '../../types/article.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public feed$: Observable<GetFeedResponseInterface | null>;
  public limit: number = environment.limit;
  public baseUrl: string;

  public currentPage: number;

  private feedSubscription: Subscription;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializelisteners();
  }
  ngOnDestroy() {
    if (this.feedSubscription) { this.feedSubscription.unsubscribe(); }
  }
  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorFeedSelector));
    this.feed$ = this.store.pipe(select(feedDataSelector));
    this.baseUrl = this.router.url.split('?')[0];

  }
  private initializelisteners(): void {
    this.feedSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1');
      this.feedFetch();
      console.log(params);
    });
  }
  private feedFetch(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWIthParams  =`${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({url: apiUrlWIthParams}));
  }
 
  public routeTo(article: ArticleInterface, route: string): void {
    const url: string = `/${route}/${article.slug}`;
    this.router.navigate([url]);
  }
  trackByFunction(index: number, article: ArticleInterface) {
    return index;
  }
  
}
