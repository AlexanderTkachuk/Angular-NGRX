import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './componets/global-feed/global-feed.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from '../shared/components/feed/feed.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from './store/reducers';
import { FeedService } from './services/feed.service';
import { MaterialModule } from '../material/material.module';
import { TagsModule } from '../tags/tags.module';

const routes: Routes = [{path: '', component: GlobalFeedComponent}];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature([GetFeedEffect]),
    FeedModule,
    TagsModule,
    MaterialModule
  ],
  providers: [FeedService],
  exports: [GlobalFeedComponent]
})
export class GlobalFeedModule { }
