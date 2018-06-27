import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
MatButtonModule,
MatInputModule,
MatDividerModule,
MatMenuModule,
MatToolbarModule,
MatIconModule,
MatListModule,
MatCardModule} from '@angular/material';

@NgModule({
  imports: [
  MatButtonModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule],

  exports: [
  MatButtonModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule]
})
export class MaterialAppModule { }