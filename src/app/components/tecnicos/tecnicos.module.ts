import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    TecnicosComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule
  ],
  exports: [
    TecnicosComponent
  ]
})
export class TecnicosModule { }
