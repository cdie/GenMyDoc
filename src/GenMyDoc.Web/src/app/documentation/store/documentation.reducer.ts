import { CONST_FILTER_DOCUMENTATION_ITEM, CONST_LOAD_DOCUMENTATION_ITEM } from './documentation.actions';
import { IAppState, initialState } from '../../store/IAppState';
import { DocumentationItem } from '../models/documentationItem';

export default function documentationReducer(state = initialState, action) {
    switch (action.type) {
        case CONST_FILTER_DOCUMENTATION_ITEM:
            return filterDocumentationItems(state, action);
        case CONST_LOAD_DOCUMENTATION_ITEM:
            return loadDocumentationItems(state, action);
        default:
            return state;
    }
}

function filterDocumentationItems(state: IAppState, action): IAppState {
    let filteredData: DocumentationItem[] = state.documentationItems;
    if (action.parentId) {
        filteredData = filteredData.filter(c => c.parentId === action.parentId);
    }
    else {
        filteredData = filteredData.filter(c => !c.parentId);
    }
    if (action.filter) {
        filteredData = filteredData.filter(c => c.name.toLowerCase().indexOf(action.filter.toLowerCase()) === 0);
    }
    return Object.assign({}, state,
        {
            filteredDocumentationItems: filteredData
        });
}

function loadDocumentationItems(state: IAppState, action): IAppState {
    return Object.assign({}, state,
        {
            documentationItems: action.documentationItems,
            filteredDocumentationItems: action.filteredDocumentationItems
        });
}