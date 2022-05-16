import { defineStore } from 'pinia';

export const useApp = defineStore({
	id: "app",

	state: () => {
		return {
			open: false,
		}
	},

	actions: {
		updateIsCollapse(value: boolean){
			this.open = value;
		}
	}
})