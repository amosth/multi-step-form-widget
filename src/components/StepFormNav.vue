<template>
	<nav class="step-form-nav">
		<transition appear name="fade">
			<button v-if="currentStep > 1 && currentStep <= totalSteps" @click.prevent="prevStep" class="left">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="23.5 24 83 80">
					<path d="M101.99 57.5H51.08c-1.31 0-1.96-1.58-1.04-2.5l19.79-19.84c.95-.96.95-2.5 0-3.46l-5.93-5.93c-.96-.96-2.5-.96-3.46 0L24.52 61.7a3.265 3.265 0 000 4.61l35.93 35.93c.96.96 2.5.96 3.46 0l5.93-5.93c.95-.95.96-2.5 0-3.46L50.5 73.46c-1.09-1.09-.32-2.96 1.23-2.96h50.26c1.35 0 2.45-1.1 2.45-2.45v-8.11c0-1.35-1.1-2.44-2.45-2.44z"/>
				</svg>
				Precedente
			</button>
		</transition>
		<button v-if="currentStep <= totalSteps" @click.prevent="nextStep" class="right" :type="currentStep == totalSteps ? 'submit' : 'button'">
			<transition appear name="fade" mode="out-in">
				<label v-if="currentStep < totalSteps" for="submit-form" :key="1">Prosegui</label>
				<router-link v-if="currentStep == totalSteps" to="/report" :key="currentStep">Vedi la valutazione</router-link>
			</transition>
		</button>
	</nav>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		name: 'StepFormNav',
		props: {
			currentStep: Number,
			totalSteps: Number,
			form: Object
		},
		methods: {
			...mapMutations({
				prevStep: 'decrementStep',
				nextStep: 'incrementStep'
			}),
			/*
			validate(currentStep, event) {
				if (currentStep == 1) {
					if (this.form.address.text == "" || this.form.typology == "" || this.form.surface == "" || this.form.rooms == "") {
						console.log("invalid1");
					} else {
						event.preventDefault();
						this.nextStep();
					}
				} else if (currentStep == 2) {
					if (this.form.requestAs == "" || this.form.aim == "" || this.form.purpose == "") {
						console.log("invalid2");
					} else {
						event.preventDefault();
						this.nextStep();
					}
				} else if (currentStep == 3) {
					if (this.form.email == "" || this.form.privacy == "" || this.form.engagement == "") {
						console.log("invalid3");
					} else {
						event.preventDefault();
						this.nextStep();
					}
				}
			}
			*/
		}
	}
</script>

<style scoped>
	.step-form-nav {
		padding: 30px 60px;
		border-top: 1px solid #DCDCDD;
	}

	.step-form-nav button {
		display: flex;
		place-items: center;
		justify-content: space-between;
		height: 40px;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 1px;
		outline: none;
		cursor: pointer;
	}

	.step-form-nav svg {
		padding-right: 10px;
		width: 18px;
		height: 18px;
		fill: #003DA5;
	}

	.step-form-nav .left {
		float: left;
		padding: 0;
		border: none;
		color: #003DA5;
	}

	.step-form-nav .right {
		float: right;
		place-content: center;
		width: 158px;
		padding: 0;
		border: none;
		background-color: #003DA5;
		border-radius: 2px;
		text-transform: uppercase;
		color: #FFFFFF;
		transition: all .2s ease;
	}

	.right label {
		display: flex;
		justify-content: center;
		padding: 0 6px;
		width: 100%;
		line-height: 100%;
		outline: none;
		cursor: pointer;
	}

	.right a {
		display: flex;
		place-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		color: #FFFFFF;
		text-decoration: none;
	}

	.step-form-nav .right[type="submit"] {
		width: 250px;
		background-color: #DC1C2E;
	}

	.step-form-nav .right:hover {
		background-color: #22346B;
	}

	.step-form-nav .right[type="submit"]:hover {
		background-color: #A31E22;
	}

	@media only screen and (max-width: 794px) {
		.step-form-nav {
			padding: 30px 0;
		}
	}
</style>
