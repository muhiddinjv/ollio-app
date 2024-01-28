import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authentication } from '../slices/authentication'
import { reducer as roles } from '../slices/roles';
import { reducer as actions } from '../slices/actions'
import { reducer as sidebarslice } from '../slices/sidebar'
import { reducer as selected_products } from '../slices/selected_products'

const rootReducer = combineReducers({
  authentication,
  roles,
  actions,
  sidebarslice,
  selected_products
});

export default rootReducer;