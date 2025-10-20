import { Routes } from '@angular/router';
import { Seccion1Component } from './components/seccion1/seccion1';

export const routes: Routes = [
  { path: '', component: Seccion1Component },  // ruta principal (home)
  { path: '**', redirectTo: '', pathMatch: 'full' } // redirección a la raíz si no existe la ruta
];
