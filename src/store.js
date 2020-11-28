import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		currentStep: 1,
		totalSteps: 3,
		form: {
			address: {
				text: "",
				longitude: null,
				latitude: null
			},
			typology: "",
			surface: "",
			rooms: "",
			requestAs: null,
			aim: null,
			purpose: null,
			email: "",
			privacy: null,
			engagement: null
		}
	},
	mutations: {
		decrementStep(state) {
			state.currentStep--;
		},
		incrementStep(state) {
			if (state.currentStep == 1) {
				if (state.form.address.text == "" || state.form.typology == "" || state.form.surface == "" || state.form.rooms == "") {
					return false;
				} else {
					state.currentStep++;
				}
			} else if (state.currentStep == 2) {
				if (state.form.requestAs == null || state.form.aim == null || state.form.purpose == null) {
					return false;
				} else {
					state.currentStep++;
				}
			} else if (state.currentStep == 3) {
				if (state.form.email == "" || state.form.privacy == null || state.form.privacy == false || state.form.engagement == null) {
					return false;
				} else {
					state.currentStep++;
				}
			}
		},
		updateAddressText(state, text) {
			state.form.address.text = text;
		},
		updateAddressLongitude(state, longitude) {
			state.form.address.longitude = longitude;
		},
		updateAddressLatitude(state, latitude) {
			state.form.address.latitude = latitude;
		},
		updateTypology(state, typology) {
			state.form.typology = typology;
		},
		updateSurface(state, surface) {
			state.form.surface = surface;
		},
		updateRooms(state, rooms) {
			state.form.rooms = rooms;
		},
		updateRequestAs(state, requestAs) {
			state.form.requestAs = requestAs;
		},
		updateAim(state, aim) {
			state.form.aim = aim;
		},
		updatePurpose(state, purpose) {
			state.form.purpose = purpose;
		},
		updateEmail(state, email) {
			state.form.email = email;
		},
		updatePrivacy(state, privacy) {
			state.form.privacy = privacy;
		},
		updateEngagement(state, engagement) {
			state.form.engagement = engagement;
		},
	}
});