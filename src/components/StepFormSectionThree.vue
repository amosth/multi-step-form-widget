<template>
	<form class="step-form-section">
		<h2>{{ title }}</h2>

		<div class="input-wrapper">
			<div class="row">
				<div id="email-div" class="input-div">
					<input id="email" v-model="email" name="email" placeholder="Inserisci il tuo indirizzo email" type="email" autocomplete="off" required/>
				</div>
			</div>

			<div class="row">
				<div id="privacy-div" class="input-div">
					<label for="privacy" class="checkbox-label">Ho letto e accetto le&nbsp;<a href="#">Condizioni generali</a>&nbsp;e la&nbsp;<a href="#">Privacy Policy</a>.
						<input id="privacy" v-model="privacy" name="privacy" type="checkbox" required>
						<span class="checkmark"></span>
					</label>
				</div>
			</div>

			<div class="row">
				<div class="question">
					<span>Vuoi essere ricontattato gratuitamente da un professionista?</span>
					<p>Scegliendo <span>Sì</span> otterrai un <span>report di mercato completo!</span></p>
				</div>
				<div class="radio-group">
					<div id="yes-div" class="input-div">
						<input id="yes" v-model="engagement" :value="true" name="engagement" type="radio" required>
						<label for="yes" class="radio-label">Sì</label>
					</div>
					<div id="no-div" class="input-div">
						<input id="no" v-model="engagement" :value="false" name="engagement" type="radio" required>
						<label for="no" class="radio-label">No</label>
					</div>
				</div>
			</div>
		</div>

		<a id="example-report" href="#">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
				<path d="M110.22 79.93h-6.92c-.97 0-1.75.27-1.75.6v19.69c0 .97-.79 1.75-1.75 1.75H28.2c-.97 0-1.75-.79-1.75-1.75V80.53c0-.33-.79-.6-1.75-.6h-6.92c-.97 0-1.75.27-1.75.6v31.36c0 .33.79.59 1.75.59h6.92c.32 0 .61-.04.87-.09h76.87c.26.05.55.09.87.09h6.92c.97 0 1.75-.27 1.75-.59V80.53c0-.33-.79-.6-1.76-.6z"/>
				<path d="M100.63 47.75H80.32V18.02c0-1.38-1.12-2.51-2.51-2.51H50.4c-1.38 0-2.51 1.12-2.51 2.51v29.73H27.87c-1.56 0-2.34 1.89-1.24 2.99l36.38 36.51c.69.69 1.8.69 2.48 0l36.38-36.51c1.1-1.1.32-2.99-1.24-2.99z"/>
			</svg>
			<span>Esempio di report</span>
		</a>
	</form>
</template>

<script>
	export default {
		name: 'StepFormSection',
		props: {
			title: String,
			form: Object
		},
		computed: {
			email: {
				get() { return this.form.email },
				set(email) { this.$store.commit('updateEmail', email) }
			},
			privacy: {
				get() { return this.form.privacy },
				set(privacy) { this.$store.commit('updatePrivacy', privacy) }
			},
			engagement: {
				get() { return this.form.engagement },
				set(engagement) { this.$store.commit('updateEngagement', engagement) }
			}
		}
	}
</script>

<style src="../../public/stylesheets/style.css"></style>
<style scoped>
	.row > .question {
		width: 65%;
	}

	.row > .radio-group {
		width: 35%;
	}

	/*
	input[type="checkbox"]:invalid ~ .checkmark, input[type="radio"]:invalid ~ .radio-label {
		outline: 4px auto #DC1C2E;
		outline-offset: -2px;
	}
	*/

	@media only screen and (max-width: 794px) {
		.input-wrapper .row {
			flex-direction: column;
			margin: 8px 0;
		}
		
		.row > .question, .row > .input-div, .row > .radio-group {
			width: 100%;
		}

		.row > .question {
			margin-bottom: 10px;
		}

	}
</style>
