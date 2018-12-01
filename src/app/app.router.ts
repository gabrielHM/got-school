import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { GamesComponent } from './components/games/games.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { ProfileComponent } from './components/profile/profile.component';

export const router: Routes = [
    {path: '', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'games', component: GamesComponent},
    {path: 'scrambble', component: ScrambbleComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
