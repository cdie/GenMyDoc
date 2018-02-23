import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';
import { DocumentationRoutingModule } from '../documentation/documentation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
