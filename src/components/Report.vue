<template>
	<div id="report-wrapper">
		<h2>La valutazione del tuo immobile</h2>
		<MapReport :longitude="address.longitude" :latitude="address.latitude"/>
		<div id="report-details">
			<span id="address">{{address.text}}</span>
			<ul id="typology-and-aim">
				<li id="typology">{{typology}}</li> · <li id="aim">In Vendita</li>
			</ul>
			<ul id="surface-and-rooms">
				<li id="surface">{{surface}} m²</li> · <li id="rooms">{{rooms == 1 ? rooms + ' locale' : rooms + ' locali'}}</li>
			</ul>
		</div>
		<div id="report-estimate">
			<div id="minimum-value" class="range-value-box">
				<div class="price-box">
					<span class="price">€ 100.000</span>
				</div>
				<div class="price-label-box">
					<span class="price-label">Prezzo minimo</span>
				</div>
			</div>
			<div id="average-value" class="range-value-box">
				<div class="price-box">
					<span class="price">€ 200.000</span>
				</div>
				<div class="price-label-box">
					<span class="price-label">Prezzo stimato</span>
				</div>
			</div>
			<div id="maximum-value" class="range-value-box">
				<div class="price-box">
					<span class="price">€ 300.000</span>
				</div>
				<div class="price-label-box">
					<span class="price-label">Prezzo massimo</span>
				</div>
			</div>
		</div>
		<div id="buttons">
			<button id="share" @click.prevent="show">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
					<path d="M106.85 97.81c0 7.74-6.28 14.04-14.02 14.04-7.74 0-14.02-6.3-14.02-14.04 0-.67.05-1.33.16-2L43.95 75.59c-2.44 1.88-5.46 3-8.77 3-7.97 0-14.41-6.42-14.41-14.41 0-7.97 6.44-14.41 14.41-14.41 3.44 0 6.58 1.23 9.06 3.26L78.7 33.16c-.18-.86-.28-1.7-.28-2.6 0-7.97 6.42-14.41 14.41-14.41 7.97 0 14.41 6.44 14.41 14.41s-6.44 14.41-14.41 14.41c-3.25 0-6.21-1.09-8.62-2.9l-34.8 20.09c.11.67.18 1.33.18 2.02 0 .82-.11 1.61-.25 2.4l34.94 20.18c2.37-1.84 5.3-2.98 8.55-2.98 7.73.01 14.02 6.31 14.02 14.03z"/>
				</svg>
				Condividi valutazione
			</button>
			<modal-share />
			<button id="make-new">
				<a href="/">Effettua una nuova valutazione</a>
			</button>
		</div>
	</div>
</template>

<script>
	import MapReport from './MapReport.vue';
	import ModalShare from './ModalShare.vue';
	import { mapState } from 'vuex';

	export default {
		name: 'Report',
		components: {
			MapReport,
			ModalShare
		},
		computed: mapState({
			address: state => state.form.address,
			typology: state => state.form.typology,
			surface: state => state.form.surface,
			rooms: state => state.form.rooms,
		}),
		methods: {
			show () {
				this.$modal.show('modal-share');
			}
		}
	}
</script>

<style src="../../public/stylesheets/style.css"></style>
<style scoped>

	#report-wrapper {
		box-sizing: border-box;
		padding: 0 60px;
	}

	#report-wrapper > * {
		margin: 30px 0;
	}

	#report-details {
		display: flex;
		flex-direction: column;
		place-items: center;
	}

	#report-details > * {
		display: flex;
		flex-direction: row;
	}

	#report-details > span {
		font-size: 18px;
		font-weight: 700;
		line-height: 30px;
	}

	#report-details > ul {
		margin: 0;
		padding: 0;
		font-size: 14px;
		line-height: 24px;
		list-style-type: none;
	}

	#typology-and-aim {
		text-transform: uppercase;
	}

	#report-details li {
		padding: 0 4px;
	}

	#report-estimate {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.range-value-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 20px;
		height: 72px;
		width: 16%;
		min-width: 130px;
		border: 1px solid #003DA5;
		color: #003DA5;
	}

	#average-value {
		border: 1px solid #DC1C2E;
		background-color: #DC1C2E;
		height: 90px;
		width: 20%;
		min-width: 150px;
		color: #FFFFFF;
	}

	#average-value span {
		font-weight: 700;
	}

	.price-box, .price-label-box {
		display: flex;
		justify-content: center;
	}

	.price-box {
		font-size: 18px;
		margin-bottom: 8px;
	}

	#average-value .price-box {
		font-size: 22px;
	}

	.price-label-box {
		font-size: 10px;
		text-transform: uppercase;
	}

	#average-value .price-label-box {
		font-size: 12px;
	}

	#buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#buttons button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		place-items: center;
		height: 40px;
		width: 48%;
		padding: 0;
		border: solid 1px;
		border-radius: 2px;
		outline: none;
		font-weight: 700;
		letter-spacing: .1em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all .2s ease;
	}

	button#share, #make-new a {
		padding: 0 6px;
	}

	#buttons #share {
		color: #003DA5;
		border-color: #003DA5;
	}

	#share svg {
		padding-right: 8px;
		height: 24px;
		fill: #003DA5;
		transition: all .2s ease;
	}

	#buttons #share:hover {
		color: #FFFFFF;
		background-color: #003DA5;
	}

	#share:hover svg {
		fill: #FFFFFF;
	}

	#buttons #make-new {
		color: #DC1C2E;
		border-color: #DC1C2E;
	}

	#make-new a {
		display: flex;
		place-items: center;
		justify-content: center;
		width: 100%;
		height: 38px;
		color: #DC1C2E;
		text-decoration: none;
	}

	#buttons #make-new:hover {
		background-color: #DC1C2E;
	}

	#make-new:hover a {
		color: #FFFFFF;
	}

	@media only screen and (max-width: 794px) {
		#report-wrapper {
			padding: 0;
		}

		.range-value-box {
			margin: 0 2%;
		}

		#buttons {
			flex-direction: column;
		}

		#buttons button {
			width: 100%;
		}

		#buttons button:not(:last-child) {
			margin-bottom: 20px;
		}
	}
</style>
