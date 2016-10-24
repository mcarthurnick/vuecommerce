import * as actions from './actions'
import * as getters from './getters'

import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './mutation-types'

const initialState = {
  all: [
    {
      id: 'sku1',
      name: 'Product #1',
      description: 'This is the product description for sku1',
      price: '299'
    }, {
      id: 'sku2',
      name: 'Product #2',
      description: 'This is the product description for sku2',
      price: '399'
    }, {
      id: 'sku3',
      name: 'Product #3',
      description: 'This is the product description for sku3',
      price: '499'
    }, {
      id: 'sku4',
      name: 'Product #4',
      description: 'This is the product description for sku4',
      price: '599'
    }
  ]
}

const mutations = {
  [CREATE_PRODUCT] (state, product) {
    state.all.push(product)
  },

  [UPDATE_PRODUCT] (state, product) {
    const index = state.all.findIndex((p) => p.id === product.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.all.splice(index, 1, product)
    }
  },

  [DELETE_PRODUCT] (state, productId) {
    state.all = state.all.filter(p => p.id !== productId)
  }
}

export default {
  state: { ...initialState },
  // OBS! Don't forget to export your actions from the products module as well.
  actions,
  getters,
  mutations
}
