import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditDeletePageRoutingModule } from './add-edit-delete-routing.module';

import { AddEditDeletePage } from './add-edit-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditDeletePageRoutingModule
  ],
  declarations: [AddEditDeletePage]
})
export class AddEditDeletePageModule {}
