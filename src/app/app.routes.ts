import { Routes } from '@angular/router';

export const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', loadComponent: () => import('./componants/home/home').then(m => m.Home)},
{path: 'about', loadComponent: () => import('./componants/about/about').then(m => m.About)},

{path: '**', redirectTo: 'home'

}


];
