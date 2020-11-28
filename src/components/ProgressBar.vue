<template>
	<ul class="progress-bar">
		<ProgressUnit name="Dati dell'immobile" :class="{'active' : currentStep >= 1, 'current' : currentStep == 1}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37">
				<path d="M35.7 15.8l-7-11.9c-.1-.2-.4-.4-.6-.4h-19c-.3 0-.5.1-.6.3L1.3 15.7c-.1.2-.1.5 0 .7.1.2.4.4.6.4h4v16c0 .4.3.7.7.7h23.8c.4 0 .7-.3.7-.7v-16h3.8c.3 0 .5-.1.6-.4.3-.2.3-.4.2-.6zM16.3 32.1v-9.3h4.6v9.3h-4.6zm13.5 0h-7.5v-10c0-.4-.3-.7-.7-.7h-6c-.4 0-.7.3-.7.7v10H7.4V16.8h22.4v15.3zM3.2 15.4L9.5 4.9h18.2l6.1 10.5H3.2z"/>
			</svg>
		</ProgressUnit>

		<ProgressUnit name="Privato/Agente" :class="{'active' : currentStep >= 2, 'current' : currentStep == 2}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
				<path d="M16.5 3c3 0 5.5 2.5 5.5 5.5S19.5 14 16.5 14 11 11.5 11 8.5 13.5 3 16.5 3m0-1.5c-3.8 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.2-7-7-7zM29.7 31.5H3.3c-.4 0-.7-.3-.7-.7 0-7.7 6.2-13.9 13.9-13.9s13.9 6.2 13.9 13.9c0 .4-.3.7-.7.7zM4.1 30h24.8c-.4-6.5-5.8-11.7-12.4-11.7-6.6 0-12 5.2-12.4 11.7z"/>
			</svg>
		</ProgressUnit>

		<ProgressUnit name="Report" :class="{'active' : currentStep >= 3, 'current' : currentStep == 3}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
				<path d="M28.7 11.7v-.2-.1c0-.1-.1-.1-.1-.2L21 1.7l-.2-.2h-.1c-.1 0-.2-.1-.2-.1H5.8c-.8.1-1.5.8-1.5 1.6v27c0 .8.7 1.5 1.5 1.5h21.3c.8 0 1.5-.7 1.5-1.5l.1-18.3zM21 4.2l5.4 6.8H21V4.2zm6.2 25.9H5.8s-.1 0-.1-.1V3s0-.1.1-.1h13.7v8.2c0 .7.6 1.3 1.3 1.3h6.3l.1 17.7c0-.1 0 0 0 0z"/>
				<path d="M13.5 14.7c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3S9.3 8 9.3 10.4s1.9 4.3 4.2 4.3zm2.8-5h-2v-2c1 .2 1.7 1 2 2zm-3.5-2.1v2.7c0 .4.3.7.7.7h2.7c-.3 1.2-1.4 2.1-2.7 2.1-1.6 0-2.9-1.3-2.9-2.9.1-1.1 1-2.2 2.2-2.6zM24.1 18.2H10c-.4 0-.7.3-.7.7s.3.7.7.7h14.1c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM21.9 21.7H10c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h12c.4 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7zM19.6 25.2H10c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h9.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7z"/>
			</svg>
		</ProgressUnit>
	</ul>
</template>

<script>
	import ProgressUnit from './ProgressUnit';

	export default {
		name: 'ProgressBar',
		props: {
			currentStep: Number
		},
		components: {
			ProgressUnit
		}
	}
</script>

<style scoped>
	.progress-bar {
		display: flex;
		justify-content: space-between;
		margin: 20px 60px;
		padding: 0;
		counter-reset: step;
		transition: all .4s ease;
	}

	@media only screen and (max-width: 794px) {
		.progress-bar {
			margin: 20px 0;
		}
	}
</style>
