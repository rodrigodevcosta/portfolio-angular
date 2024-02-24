import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProjetosPageComponent } from './component/projetos-page/projetos-page.component';
import { compileClassDebugInfo } from '@angular/compiler';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'home' }, // Rota para a página inicial
  { path: 'home', component:HomePageComponent},
  {path:"projetos",component:ProjetosPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
