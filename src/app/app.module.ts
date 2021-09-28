import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { environment } from 'src/environments/environment';
import { TopBarModule } from './shared/components/top-bar/top-bar.module';
import { PersistentService } from './shared/services/persistent.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.interceptor';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    MaterialModule,
    TopBarModule
  ],
  providers: [PersistentService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
