import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationListComponent } from './documentation-list/documentation-list.component';
import { DocumentationComponent } from './documentation.component';
import { DocumentationDetailsComponent } from './documentation-details/documentation-details.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ],
  declarations: [DocumentationListComponent, DocumentationComponent, DocumentationDetailsComponent],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
