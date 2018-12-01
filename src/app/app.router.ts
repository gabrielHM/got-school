import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

export const router: Routes = [
    {path: '', component: LoginComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
