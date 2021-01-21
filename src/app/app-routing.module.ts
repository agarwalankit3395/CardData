import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCreateComponent } from './main-content/card-create/card-create.component';
import { CardDetailComponent } from './main-content/card-detail/card-detail.component';

const routes: Routes = [

  { path: '', component: CardCreateComponent },
  { path: 'list', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
