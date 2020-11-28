<template>
	<div id="map-wrapper">
		<div id="map">
			<MglMap :mapboxGl="mapboxgl" :accessToken="accessToken" :mapStyle.sync="mapStyle" :center="center" :zoom="zoom">
				<MglNavigationControl position="top-right"/>
				<MglGeocoderControl 
					:accessToken="accessToken"
					placeholder="Indirizzo"
					:setInput="addressText"
					@result="getSelected"
					:limit="3"
					/>
			</MglMap>
			<!--
			<mapbox-map style="height: 400px;" :access-token="accessToken" :map-style="mapStyle" :center="center" :zoom="zoom"> 
				<mapbox-navigation-control position="top-right" />
				<mapbox-geocoder 
					:accessToken="accessToken"
					placeholder="Indirizzo"
					:setInput="addressText"
					@result="getSelected"
					:limit="3"
				/>
			</mapbox-map>
			-->
		</div>
	</div>
</template>

<script>
	import Mapbox from "mapbox-gl";
	import { MglMap, MglNavigationControl } from "vue-mapbox";
	import MglGeocoderControl from 'vue-mapbox-geocoder';
	//import { MapboxMap, MapboxNavigationControl, MapboxGeocoder } from "@studiometa/vue-mapbox-gl";

	export default {
		props: {
			form: Object
		},
		components: {
			MglMap, MglNavigationControl, MglGeocoderControl,
			//MapboxMap, MapboxNavigationControl, MapboxGeocoder
		},
		data() {
			return {
				accessToken: 'pk.eyJ1IjoiYW1vcy1kZXZlbG9uIiwiYSI6ImNrOTg3d280cjA0OGczbms0Z2Y2dnZiejcifQ.UFLrPMgL62G_PuyDebG1xg',
				mapStyle: 'mapbox://styles/mapbox/light-v10',
				offset: [0, -15],
				center: [12.5,42.1],
				zoom: 3.6,
				color: '#003DA5',
				mapboxgl: this.map
			};
		},
		created() {
			this.mapbox = Mapbox;
		},
		methods: {
			getSelected(event) {
				this.addressText = event.result.text+", "+event.result.context[1].text;
				this.addressLongitude = event.result.center[0];
				this.addressLatitude = event.result.center[1];
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
		}
	}
</script>

<style src="../../public/stylesheets/mapbox-gl.css"></style>
<style src="../../public/stylesheets/mapbox-gl-search.css"></style>
<style scoped>
	#map {
		display: flex;
		flex-direction: column;
		height: 250px;
		position: relative;
	}
</style>