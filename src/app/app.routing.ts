import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {
    path:'home',
    component:'./home/HomeComponent'
  },
  {
    path:'nosotros',
    component:'./nosotros/NosotrosComponent'
  },
  {
    path:'contacto',
    component:'./contacto/ContactoComponent'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
