import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditDeletePage } from './add-edit-delete.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditDeletePageRoutingModule {}
