import { Component, OnInit, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './auth/store/actions/current-user-actions';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isExpanded = true;
  @ViewChildren(MatDrawer) matDrawer;
  constructor(private store: Store) { }
  ngOnInit() {
    this.store.dispatch(getCurrentUserAction());
  }
  public async toggleMenu() {
    await this.matDrawer.first.toggle();
    this.isExpanded = !this.isExpanded;
  }
}
