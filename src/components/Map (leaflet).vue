<template>
	<div id="map">
		<l-map :zoom="zoom" :center="center">
			<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
			<l-marker :lat-lng="marker"></l-marker>
		</l-map>
	</div>
</template>

<script>
	import { Icon } from 'leaflet';
	import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		iconRetinaUrl: require('../../public/img/marker.png'),
		iconUrl: require('../../public/img/marker.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
	});

	export default {
		name: 'Map',
		components: {
			LMap,
			LTileLayer,
			LMarker
		},
		data() {
			return {
				zoom: 16,
				center: [45.514941, 11.487961],
				url: 'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1vcy1kZXZlbG9uIiwiYSI6ImNrOTg3d280cjA0OGczbms0Z2Y2dnZiejcifQ.UFLrPMgL62G_PuyDebG1xg',
				attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				marker: [45.514941, 11.487961],
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
			}
		}
	}
</script>

<style scoped>
	#map {
		height: 250px;
		background-color: #F0F0F0;
		display: flex;
		justify-content: center;
		place-items: center;
		color: #888888;
	}
</style>