import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContentTreeComponent } from './content-tree/content-tree.component';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    ContentTreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: '', component: MainComponent },
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    [material],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
