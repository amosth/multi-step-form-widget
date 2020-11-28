<template>
	<form class="step-form-section">
		<h2>{{ title }}</h2>

		<div class="input-wrapper">
			<div class="row">
				<div class="question">
					<span>Richiedi come</span>
				</div>
				<div class="radio-group">
					<div id="private-div" class="input-div">
						<input id="private" v-model="requestAs" name="requestAs" value="private" type="radio" required>
						<label for="private" class="radio-label">Privato</label>
					</div>
					<div id="realestate-div" class="input-div">
						<input id="realestate" v-model="requestAs" name="requestAs" value="realestate" type="radio" required>
						<label for="realestate" class="radio-label">Agente immobiliare</label>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="question">
					<span>Cosa desideri fare con questa proprietà?</span>
				</div>
				<div class="radio-group">
					<div id="sell-div" class="input-div">
						<input id="sell" v-model="aim" name="aim" value="sell" type="radio" required>
						<label for="sell" class="radio-label">Vendere</label>
					</div>
					<div id="buy-div" class="input-div">
						<input id="buy" v-model="aim" name="aim" value="buy" type="radio" required>
						<label for="buy" class="radio-label">Comprare</label>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="question">
					<span>Perché richiedi questa valutazione?</span>
				</div>
				<div id="purpose-div" class="input-div">
					<multiselect v-model="purpose" :options="purposeOpts" :searchable="false" :show-labels="false" placeholder="Seleziona"></multiselect>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	import Multiselect from 'vue-multiselect';

	export default {
		name: 'StepFormSectionTwo',
		components: {
			Multiselect
		},
		props: {
			title: String,
			form: Object
		},
		data () {
			return {
				purposeOpts: ['Per acquisire un incarico', 'Investimento', 'Voglio comprare casa', 'Voglio vendere casa', 'Curiosità', 'Altro']
			}
		},
		computed: {
			requestAs: {
				get() { return this.form.requestAs },
				set(requestAs) { this.$store.commit('updateRequestAs', requestAs) }
			},
			aim: {
				get() { return this.form.aim },
				set(aim) { this.$store.commit('updateAim', aim) }
			},
			purpose: {
				get() { return this.form.purpose },
				set(purpose) { this.$store.commit('updatePurpose', purpose) }
			}
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="../../public/stylesheets/style.css"></style>
<style src="../../public/stylesheets/multiselect.css"></style>
<style scoped>
	.row > .question {
		width: 45%;
	}

	.row > .input-div, .row > .radio-group {
		width: 55%;
	}

	.multiselect {
		cursor: pointer;
	}

	@media only screen and (max-width: 794px) {
		.input-wrapper .row {
			flex-direction: column;
			margin: 8px 0;
		}

		.row > .question, .row > .input-div, .row > .radio-group {
			width: 100%;
		}

		.row > .question {
			margin-bottom: 8px;
		}
	}
</style>
