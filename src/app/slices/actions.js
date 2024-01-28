import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  handleShopActions: {
    delete: { 
      isOpen: false,
      id: null
    },
    edit: {
      isOpen: false,
      id: null
    }
  },
  handleRegionActions: {
    create: {
      isOpen: false,
    }
  },
  handleProductCategoriesActions: {
    delete: {
      isOpen: false,
      ids: []
    }
  },
  handleProductBrands: {
    delete: {
      isOpen: false,
      ids: []
    }
  },
  handleProductUnitsActions: {
    delete: {
      isOpen: false,
      ids: []
    }
  },
  route_name: '',
  update_home_page: false,
};

const actions = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    HANDLESHOPDELETEDIALOG(state, action) {
      const { id, isOpen } = action.payload;
      state.handleShopActions.delete.id = id;
      state.handleShopActions.delete.isOpen = isOpen;
    },
    HANDLESHOPEDITDIALOG(state, action) {
      const { id, isOpen } = action.payload;
      state.handleShopActions.edit.id = id;
      state.handleShopActions.edit.isOpen = isOpen;
    },
    HANDLEREGIONCREATEDIALOG(state, action) {
      const { isOpen } = action.payload;
      state.handleRegionActions.create.isOpen = isOpen;
    },
    HANDLEPRODUCTCATEGORIESDIALOG(state, action) {
      const { ids, isOpen } = action.payload;
      state.handleProductCategoriesActions.delete.isOpen = isOpen;
      state.handleProductCategoriesActions.delete.ids = ids;
    },
    HANDLEPRODUCTBRANDSDIALOG(state, action) {
      const { ids, isOpen } = action.payload;
      state.handleProductBrands.delete.isOpen = isOpen;
      state.handleProductBrands.delete.ids = ids
    },
    HANDLEPRODUCTUNITSDIALOG(state, action) {
      const { ids, isOpen } = action.payload;
      state.handleProductUnitsActions.delete.isOpen = isOpen;
      state.handleProductUnitsActions.delete.ids = ids;
    },
    HANDLEDETECTROUTENAME(state, action) {
      const { route_name } = action.payload;
      state.route_name = route_name;
    },
    HANDLEUPDATEPAGE(state, action) {
      const { updated } = action.payload;
      state.update_home_page = updated;
    }
  },
});

export const { HANDLESHOPDELETEDIALOG, HANDLESHOPEDITDIALOG, HANDLEREGIONCREATEDIALOG, HANDLEPRODUCTCATEGORIESDIALOG, HANDLEPRODUCTBRANDSDIALOG, HANDLEPRODUCTUNITSDIALOG, HANDLEDETECTROUTENAME, HANDLEUPDATEPAGE } = actions.actions;
export const reducer = actions.reducer;
export default actions;
