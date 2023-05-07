import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { PageDefaltComponent } from './page-defalt/page-defalt.component';
import { DataTablecliComponent } from './data-tablecli/data-tablecli.component';


const routes: Routes = [
  {path:'cliente',component: ListaClienteComponent},
  {path:'home',component: PageDefaltComponent},
  {path: 'about',component: DataTablecliComponent},
  {path: ' ', redirectTo:'/PageDefaltComponent', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
