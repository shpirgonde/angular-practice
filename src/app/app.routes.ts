import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    {
        path: 'login',
        loadComponent: () => import('./features/login/login').then(m => m.Login)
    },

    
    { path: 'signup', loadComponent: () => import('./features/signup/signup').then(m => m.Signup) },
];
