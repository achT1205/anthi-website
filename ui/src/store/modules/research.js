import { fetchPublications } from "../api";

const ResearchModule = {
    state: {
        publications: []
    },
    mutations: {
        SET_PUBLICATIONS: (state, payload) => (state.publications = payload),
    },
    actions: {
        loadPublications({ commit }) {
            fetchPublications().then((publications) => {
                commit('SET_PUBLICATIONS', publications);
            })
                .catch((err) => {
                    console.error(err);
                })
        }
    },
    getters: {
        publications: (state) => state.publications
    },
    modules: {
    },
}

export default ResearchModule;