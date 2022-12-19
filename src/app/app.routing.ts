import { Routes, RouterModule } from '@angular/router';

import { BioComponent } from './bio';
import { HomeComponent } from './home';

const routes: Routes = [
    { path: 'bio', component: BioComponent },
    { path: '', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
