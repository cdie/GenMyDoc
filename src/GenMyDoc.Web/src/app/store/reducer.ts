import { combineReducers } from 'redux';
import documentationReducer from '../documentation/store/documentation.reducer';
import { IAppState } from './IAppState';
import { DocumentationItem } from '../documentation/models/documentationItem';

export const reducer = combineReducers<IAppState>({
    documentationReducer
});