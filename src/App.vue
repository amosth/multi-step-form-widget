<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

	export default {
		name: 'App'
	}
</script>

<style>
	body {
		display: flex;
		justify-content: center;
		margin: 0;
	}
	#app {
		display: flex;
		flex-direction: column;
		place-items: center;
		width: 80%;
		font-family: Proxima Nova,sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #003DA5;
		transition: all .4s ease;
	}

	#app > div {
		width: 100%;
	}

	::selection {
		background-color: rgba(220,28,46,.2);
		text-shadow: none;
	}

	.fade-enter-active, .fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	@media only screen and (max-width: 794px) {
		#app {
			width: 100%;
		}

		#app > div {
			width: 95%;
		}
	}
</style>
