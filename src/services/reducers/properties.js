// import Immutable from 'immutable';
import objectAssign from 'object-assign';

import { PROPERTY } from '../actions/types';

const initialState = {
  properties: [],
  searchResults: [],
  totalCount: '',
  property: {}
};

const PropertiesReducer  = (state = initialState, action) => {
    switch(action.type) {
        case PROPERTY.GET_ALL:
            return objectAssign({}, state, {
                properties: action.properties,
                totalCount: action.totalCount
            });
        case PROPERTY.SEARCH_ALL:
            return objectAssign({}, state, {
                searchResults: action.searchResults,
                totalSearchCount: action.totalSearchCount
            });
        case PROPERTY.SET_ACTIVE:
            return objectAssign({}, state, {
                property: action.property
            })

        default:
            return state;
    }
}

export default PropertiesReducer;