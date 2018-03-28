import { Component, OnInit } from '@angular/core';
import { DocumentationActions } from '../store/documentation.actions';
import { DocumentationItem } from '../models/documentationItem';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-documentation-list',
  templateUrl: './documentation-list.component.html',
  styleUrls: ['./documentation-list.component.css']
})
export class DocumentationListComponent implements OnInit {

  //#region Members

  @select('filteredDocumentationItems')
  filteredDocumentationItems$: Observable<DocumentationItem>;

  //#endregion

  //#region Ctor

  constructor(private _actions: DocumentationActions) {
  }

  //#endregion

  ngOnInit() {
    this._actions.filterDocumentationItems('');
  }

}
