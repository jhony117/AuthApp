import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path : 'auth',
  //guatrd
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
},
{path : 'dashboard',
//guatrd
loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
},
{
  path :'**',
  redirectTo : 'auth'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }