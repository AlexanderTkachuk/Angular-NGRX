import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'global-feed', loadChildren: () => import('./globalFeed/global-feed.module').then(m => m.GlobalFeedModule)},
  // { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
