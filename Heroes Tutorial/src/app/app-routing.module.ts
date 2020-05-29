import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// routes where our pages(components) are
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'hero/:id', component: HeroDetailComponent }, // :id is a placeholder for a specific hero id.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // will be podklycheni posle imya domena
  exports: [RouterModule]
})
export class AppRoutingModule { }
