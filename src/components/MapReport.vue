<template>
	<div id="map-wrapper">
		<div id="map">
			<MglMap :mapboxGl="mapboxgl" :accessToken="accessToken" :mapStyle.sync="mapStyle" :center="[longitude, latitude]" :zoom="zoom">
				<MglMarker :coordinates="[longitude, latitude]" :color="color" :offset="offset"/>
			</MglMap>
		</div>
	</div>
</template>

<script>
	import Mapbox from "mapbox-gl";
	import { MglMap, MglMarker } from "vue-mapbox";

	export default {
		props: {
			longitude: Number,
			latitude: Number
		},
		components: {
			MglMap,
			MglMarker
		},
		data() {
			return {
				accessToken: 'pk.eyJ1IjoiYW1vcy1kZXZlbG9uIiwiYSI6ImNrOTg3d280cjA0OGczbms0Z2Y2dnZiejcifQ.UFLrPMgL62G_PuyDebG1xg',
				mapStyle: 'mapbox://styles/mapbox/light-v10',
				offset: [0, -15],
				zoom: 16,
				color: '#003DA5',
				mapboxgl: this.map
			};
		},
		created() {
			this.mapbox = Mapbox;
		}
	}
</script>

<style scoped>
	#map {
		display: flex;
		flex-direction: column;
		height: 250px;
		position: relative;
	}
</style>