import * as T from './types';
import actions from './actions';
import mutations from './mutations';

const state = {
  search_params: {}
};

const getters = {
    [T.SEARCH_KEYWORD]() {
        return state.search_keyword
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}