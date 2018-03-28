import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentationListComponent } from './documentation-list/documentation-list.component';
import { DocumentationComponent } from './documentation.component';
import { DocumentationDetailsComponent } from './documentation-details/documentation-details.component';
import { DocumentationActions } from './store/documentation.actions';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    DocumentationListComponent,
    DocumentationComponent,
    DocumentationDetailsComponent
  ],
  exports: [
    DocumentationComponent
  ],
  providers: [
    DocumentationActions
  ]
})
export class DocumentationModule {

}
