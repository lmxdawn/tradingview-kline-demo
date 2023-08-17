import {isAddress} from "ethers/lib/utils";
import {getLanguage, setLanguage} from "../../utils/language";
import {getStorageSync, removeStorageSync, setStorageSync} from "../../utils/storage";

console.log(getStorageSync("sidebarStatus"))

const state = {
	sidebar: {
		opened: getStorageSync("sidebarStatus") == 1
	},
	language: getLanguage(),
	superior: "0x0000000000000000000000000000000000000000",//语言
	chainId: "",
	downloadVisible: window.app !== 'sds_wallet',
};

// getters
const getters = {
	sidebar: state => state.sidebar,
	language: state => state.language,
	superior: state => state.superior,
	chainId: state => state.chainId,
	downloadVisible: state => state.downloadVisible,
};

// actions
const actions = {
	ToggleSideBar({ commit }) {
		commit("TOGGLE_SIDEBAR");
	},
	ShowSideBar({ commit }) {
		commit("SHOW_SIDEBAR");
	},
    setLanguage({ commit }, data) {
        commit("setLanguage", data);
    },
	setSuperior({commit}, data){
		if (isAddress(data)) {
			commit('setSuperior',data);
		}
	},
    setChainId({ commit }, data) {
        commit("setChainId", data);
    },
    setDownloadVisible({ commit }, data) {
        commit("setDownloadVisible", data);
    }
};

const mutations = {
	TOGGLE_SIDEBAR(state){
		if (state.sidebar.opened) {
			removeStorageSync("sidebarStatus");
		} else {
			setStorageSync("sidebarStatus", 1);
		}
		state.sidebar.opened = !state.sidebar.opened;
	},
	SHOW_SIDEBAR(state) {
		if (state.sidebar.opened) {
			removeStorageSync("sidebarStatus");
		}
		state.sidebar.opened = false;
	},
	setLanguage(state, data){
		const lang = state.language === 'en' ? 'zh-Hant' : 'en'
		state.language = lang;
		setLanguage(lang)
	},
	setSuperior(state, data){
		state.superior = data;
	},
	setChainId(state, data){
		state.chainId = data;
	},
	setDownloadVisible(state, data){
		state.downloadVisible = data;
	}
};

export default {
    state,
    getters,
    actions,
    mutations
};