import { NgModule, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatListModule, MatSidenavModule, MatProgressSpinnerModule, MatGridListModule, MatTabsModule, MatChipsModule],
  exports: [MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatListModule, MatSidenavModule, MatProgressSpinnerModule, MatGridListModule, MatTabsModule, MatChipsModule]
})
export class MaterialModule { }
