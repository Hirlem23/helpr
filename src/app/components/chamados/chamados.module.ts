import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ChamadoCreateComponent } from './childrens/chamado-create/chamado-create.component';


@NgModule({
  declarations: [
    ChamadosComponent,
    ChamadoCreateComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    ChamadosComponent,
    ChamadoCreateComponent
  ]
})
export class ChamadosModule { }
