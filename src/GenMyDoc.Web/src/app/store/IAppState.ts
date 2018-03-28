import { DocumentationItem } from '../documentation/models/documentationItem';

export interface IAppState {
    documentationItems: DocumentationItem[];
    filteredDocumentationItems: DocumentationItem[];
}

export const initialState: IAppState = {
    documentationItems: [], //baseDocs,
    filteredDocumentationItems: []// baseDocs
};