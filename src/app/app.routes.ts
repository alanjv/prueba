import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', redirectTo:'', pathMatch: 'full'}
];
