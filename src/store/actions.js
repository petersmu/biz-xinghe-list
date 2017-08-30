import * as T from './types'

export default {
    [T.SET_SEARCH_KEYWORD]({ commit }, params) {
        commit(T.UPDATE_SEARCH_KEYWORD, params)
    }
}
