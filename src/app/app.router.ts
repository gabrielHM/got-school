import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GamesComponent } from './components/games/games.component';
import { ScrambbleComponent } from './components/scrambble/scrambble.component';
import { ScrambleReviewComponent } from './components/scrambble/scramble-review/scramble-review.component';
import { ScramblePlayComponent } from './components/scrambble/scramble-play/scramble-play.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SpanishGameComponent } from 'src/app/components/spanish-game/spanish-game.component';
import { VideoResourcesComponent } from './components/video-resources/video-resources.component';
import { RecessComponent } from './components/recess/recess.component';

export const router: Routes = [
    
    {path: 'login', component: LoginComponent},
    { path: 'gotschool', component: NavbarComponent,
    children: [
        {path: 'profile', component: ProfileComponent},
        {path: 'games', component: GamesComponent},
        {path: 'scrambble', component: ScrambbleComponent},
        {path: 'scrambble_review', component: ScrambleReviewComponent},
        {path: 'scrambble_play', component: ScramblePlayComponent},
        {path: 'scrambble', component: ScrambbleComponent},
        {path: 'spanish_game', component: SpanishGameComponent},
        {path: 'video_resources', component: VideoResourcesComponent},
        {path: 'recess', component: RecessComponent},
        { path: '', redirectTo: 'profile', pathMatch: 'full'},
    ]
     },
    {path: '', redirectTo:'login', pathMatch: 'full'}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
