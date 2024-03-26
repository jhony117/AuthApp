import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component :DashboardLayoutComponent,
    //children : []
    //* es posibler crear tantos guard como queramos y ponerlos a nivel de padre o de hijo

    //* ejemplo : un guard en ujna ruta hija que solo alguin con cierto rol puede acceder
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
