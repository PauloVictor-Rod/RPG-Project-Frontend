import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
];

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
