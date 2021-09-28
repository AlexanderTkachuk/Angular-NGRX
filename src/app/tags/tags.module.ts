import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { tagsReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetTagsEffect } from './store/effects';



@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('tags', tagsReducers),
    EffectsModule.forFeature([GetTagsEffect]),
    MaterialModule
  ],
  exports: [TagsComponent]
})
export class TagsModule { }
