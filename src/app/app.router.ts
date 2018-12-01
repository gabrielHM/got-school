import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { GamesComponent } from './components/games/games.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { ScrambleReviewComponent } from './components/scrambble/scramble-review/scramble-review.component';
import { ScramblePlayComponent } from './components/scrambble/scramble-play/scramble-play.component';


export const router: Routes = [
    {path: '', component: LoginComponent},
    {path: 'games', component: GamesComponent},
    {path: 'scrambble', component: ScrambbleComponent},
    {path: 'scrambble_review', component: ScrambleReviewComponent},
    {path: 'scrambble_play', component: ScramblePlayComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
