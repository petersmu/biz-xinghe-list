import * as T from './types'

export default {
    [T.UPDATE_SEARCH_KEYWORD](state, payload) {
        state.search_params = Object.assign(state.search_params, payload)
    }
}
