import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeComponent } from './pages/nike/nike.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { AsicsComponent } from './pages/asics/asics.component';
import { LacosteComponent } from './pages/lacoste/lacoste.component';
import { PumaComponent } from './pages/puma/puma.component';

const routes: Routes = [
  {path:"nike", component: NikeComponent},
  {path:"asics", component: AsicsComponent},
  {path:"lacoste", component: LacosteComponent},
  {path:"adidas", component: AdidasComponent},
  {path:"puma", component: PumaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
