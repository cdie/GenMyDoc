import { Component, OnInit } from '@angular/core';
import { DocumentationActions } from './store/documentation.actions';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  //#region Ctor

  constructor(private _actions: DocumentationActions) { }

  //#endregion

  //#region OnInit

  ngOnInit() {
    this._actions.loadDocumentationItems();
  }

  //#endregion

}
