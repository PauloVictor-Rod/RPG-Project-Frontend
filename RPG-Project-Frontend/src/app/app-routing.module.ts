import { WelcomeModule } from './views/welcome/welcome/welcome.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "**", redirectTo: "/" },
  { path: '', loadChildren: () => import('./views/welcome/welcome/welcome.module').then(m => m.WelcomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
