import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './comopents/first/first.component';
import { SecondComponent } from './comopents/second/second.component';

const routes: Routes = [
  {
    path : '',
    component : AppComponent,
    pathMatch : 'full'
  },
  {
    path : 'series',
    component : AppComponent,    
  },
  {
    path : 'anime',
    component : FirstComponent,    
  },
  {
    path : 'movies',
    component : SecondComponent,    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
