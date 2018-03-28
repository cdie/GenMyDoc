import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/IAppState';
import { DocumentationItem } from '../models/documentationItem';

export const CONST_FILTER_DOCUMENTATION_ITEM = "doc/filter";
export const CONST_LOAD_DOCUMENTATION_ITEM = "doc/load";

const baseDocs: DocumentationItem[] = [
    { name: 'Item 1', id: '1' },
    { name: 'Item 2', id: '2' },
    { name: 'Item 3', id: '3' },
    { name: 'Sub Item 1', id: '4', parentId: '1' },
];

@Injectable()
export class DocumentationActions {

    //#region Ctor

    constructor(private _ngRedux: NgRedux<IAppState>) {

    }

    //#endregion

    //#region Public methods

    loadDocumentationItems(data: DocumentationItem[] = baseDocs) {
        this._ngRedux.dispatch({
            type: CONST_LOAD_DOCUMENTATION_ITEM,
            documentationItems: data,
            filteredDocumentationItems: data
        });
    }

    filterDocumentationItems(filter: string, parentId?: string): void {
        this._ngRedux.dispatch({
            type: CONST_FILTER_DOCUMENTATION_ITEM,
            filter,
            parentId
        });
    }

    //#endregion
}