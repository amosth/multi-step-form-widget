<template>
	<div>
		<ProgressBar v-if="currentStep >= 1 && currentStep <= totalSteps" :currentStep="currentStep"/>
		<StepForm v-if="currentStep >= 1 && currentStep <= totalSteps" :currentStep="currentStep" :totalSteps="totalSteps"/>
	</div>
</template>

<script>
	import ProgressBar from './ProgressBar.vue';
	import StepForm from './StepForm.vue';
	import { mapState } from 'vuex';

	export default {
		name: 'Form',
		components: {
			ProgressBar,
			StepForm
		},
		computed: mapState({
			currentStep: state => state.currentStep,
			totalSteps: state => state.totalSteps,
		})
	}
</script>

<style>
</style>
