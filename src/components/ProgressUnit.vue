<template>
	<li class="progress-unit">
		<slot/>
		<span>{{ name }}</span>
	</li>
</template>

<script>
	export default {
		name: 'ProgressUnit',
		props: {
			name: String
		},
	}
</script>

<style scoped>
	.progress-unit {
		display: flex;
		flex-direction: column;
		width: 33.33%;
	}

	svg {
		display: flex;
		place-self: center;
		width: 36px;
		height: 36px;
		margin-bottom: 4px;
		fill: #C5C3C6;
		transition: fill .4s ease;
	}

	.progress-unit span {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		font-size: 12px;
		color: #C5C3C6;
		transition: color .4s ease;
	}

	.progress-unit span:before {
		display: flex;
		place-self: center;
		place-items: center;
		justify-content: center;
		content: counter(step);
		counter-increment: step;
		width: 16px;
		height: 16px;
		margin-bottom: 10px;
		font-size: 10px;
		color: transparent;
		border: 4px solid #C5C3C6;
		background-color: #FFFFFF;
		border-radius: 50%;
		transform: scale(.5);
		transition: all .4s ease;
	}

	.progress-unit span:after {
		content: '';
		width: 100%;
		height: 1.5px;
		background-color: #C5C3C6;
		background-size: 0% 100%;
		background-repeat: no-repeat;
		background-image: linear-gradient(to bottom, transparent 0%, #DC1C2E 0%);
		margin-top: -37px;
		margin-left: -50%;
		z-index: -1;
		transition: all .2s ease;
	}

	.progress-unit:first-child span:after {
		content: none;
	}

	.progress-unit.active svg {
		fill: #003DA5;
	}

	.progress-unit.active span {
		color: #003DA5;
	}

	.progress-unit.active span:before {
		border-color: #DC1C2E;
		background-color: #DC1C2E;
	}

	.progress-unit.active span:after {
		background-size: 100% 100%;
	}

	.progress-unit.current span:before {
		color: #FFFFFF;
		font-weight: 700;
		transform: scale(1.25);
	}
</style>
