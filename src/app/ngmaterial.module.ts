import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,MatInputModule,MatDividerModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatInputModule,MatDividerModule],
  exports: [MatButtonModule,MatInputModule,MatDividerModule]
})
export class MaterialAppModule { }