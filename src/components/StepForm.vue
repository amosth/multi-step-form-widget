<template>
	<form class="step-form">
		<transition appear name="fade" mode="out-in">
			<StepFormSectionOne v-if="currentStep == 1" :key="currentStep" title="Inserisci i dati del tuo immobile" :form="form"/>
			<StepFormSectionTwo v-if="currentStep == 2" :key="currentStep" title="Chi effettua la valutazione" :form="form"/>
			<StepFormSectionThree v-if="currentStep == 3" :key="currentStep" title="Ricevi la tua valutazione dell'immobile" :form="form"/>
		</transition>

		<StepFormNav :currentStep="currentStep" :totalSteps="totalSteps" :form="form"/>
	</form>
</template>

<script>
	import StepFormSectionOne from './StepFormSectionOne.vue';
	import StepFormSectionTwo from './StepFormSectionTwo.vue';
	import StepFormSectionThree from './StepFormSectionThree.vue';
	import StepFormNav from './StepFormNav.vue';
	import { mapState } from 'vuex';

	export default {
		name: 'StepForm',
		props: {
			currentStep: Number,
			totalSteps: Number
		},
		components: {
			StepFormSectionOne,
			StepFormSectionTwo,
			StepFormSectionThree,
			StepFormNav
		},
		computed: mapState({
			form: state => state.form
		})
	}
</script>

<style scoped>
	.step-form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.step-form-section {
		padding: 0 60px;
		min-height: 498px;
	}

	@media only screen and (max-width: 794px) {
		.step-form-section {
			padding: 0;
		}
	}
</style>
