<template>
	<form class="step-form-section">
		<h2>{{ title }}</h2>

		<MapForm :form="form"/>

		<div class="input-wrapper">
			<div class="row">
				<div id="address-div" class="input-div">
					<input id="address" v-model="addressText" placeholder="Indirizzo" autocomplete="off" required/>
				</div>
			</div>

			<div class="row">
				<div id="typology-div" class="input-div">
					<multiselect v-model="typology" :options="typologyOpts" :searchable="false" :show-labels="false" placeholder="Tipologia"></multiselect>
				</div>
				<div id="surface-div" class="input-div">
					<input id="surface" v-model="surface" name="surface" placeholder="Superficie (m²)" type="number" min="1" max="999999" required>
				</div>
				<div id="rooms-div" class="input-div">
					<input id="rooms" v-model="rooms" name="rooms" placeholder="Locali (N°)" type="number" min="1" max="99" required>
				</div>
			</div>
		</div>

		<input type="submit" id="submit-form" class="hidden"/>
	</form>
</template>

<script>
	import MapForm from './MapForm.vue';
	import Multiselect from 'vue-multiselect';

	export default {
		name: 'StepFormSectionOne',
		components: {
			MapForm,
			Multiselect
		},
		props: {
			title: String,
			form: Object
		},
		data () {
			return {
				typologyOpts: ['Appartamento', 'Villa', 'Villa a Schiera', 'Attico', 'Casa Indipendente', 'Rustico', 'Box', 'Loft', 'Palazzo'],
			}
		},
		computed: {
			addressText: {
				get() { return this.form.address.text },
				set(addressText) { this.$store.commit('updateAddressText', addressText) }
			},
			addressLongitude: {
				get() { return this.form.address.longitude },
				set(addressLongitude) { this.$store.commit('updateAddressLongitude', addressLongitude) }
			},
			addressLatitude: {
				get() { return this.form.address.latitude },
				set(addressLatitude) { this.$store.commit('updateAddressLatitude', addressLatitude) }
			},
			typology: {
				get() { return this.form.typology },
				set(typology) { this.$store.commit('updateTypology', typology) }
			},
			surface: {
				get() { return this.form.surface },
				set(surface) { this.$store.commit('updateSurface', surface) }
			},
			rooms: {
				get() { return this.form.rooms },
				set(rooms) { this.$store.commit('updateRooms', rooms) }
			}
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="../../public/stylesheets/style.css"></style>
<style src="../../public/stylesheets/multiselect.css"></style>
<style scoped>
	.input-div {
		width: 31.5%;
	}

	@media only screen and (max-width: 794px) {
		.row {
			flex-wrap: wrap;
		}

		.input-wrapper #typology-div {
			width: 100%;
			margin-bottom: 20px;
		}

		.input-wrapper #surface-div {
			width: 48%;
		}

		.input-wrapper #rooms-div {
			width: 48%;
		}
	}
</style>
