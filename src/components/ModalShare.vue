<template>
	<modal class="modal-share-wrapper" name="modal-share" width="360" height="190" styles="display: flex; flex-direction: column; place-content: space-between;padding: 14px;">
		<div class="modal-share-header">
			<h4 class="modal-title">Condividi</h4>
			<button type="button" class="close" @click.prevent="hide">
				<img src="../../public/img/close.svg" alt="Icona chiudi">
			</button>
		</div>
		<div class="modal-share-body">
			<ul>
				<li>
					<a href="#" id="facebook-share">
						<img src="../../public/img/fb.svg" alt="Icona Facebook">Facebook</a>
				</li>
				<li>
					<a href="#" id="whatsapp-share">
						<img src="../../public/img/wa.svg" alt="Icona WhatsApp">Whatsapp</a>
				</li>
				<li>
					<a href="#" id="email-share">
						<img src="../../public/img/mail.svg" alt="Icona Email">Email</a>
				</li>
			</ul>
		</div>
	</modal>
</template>

<script>
	export default {
		methods: {
			hide () {
				this.$modal.hide('modal-share');
			}
		}
	}
</script>

<style scoped>
	img {
		width: 24px;
		margin-right: 10px;
	}

	.close img {
		margin: 0;
	}

	.v--modal-overlay {
		background: rgba(0,0,0,0.6);
	}

	.modal-share-header, .modal-share-body {
		display: flex;
	}

	.modal-share-header {
		justify-content: space-between;
	}

	.modal-title {
		margin: 0;
		font-size: 20px;
	}

	.close {
		background: none;
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		transition: all .4s ease;
	}

	.modal-share-body a {
		display: inline-flex;
		place-items: center;
		text-decoration: none;
		color: #003DA5;
		transition: all .4s ease;
	}

	.modal-share-body li {
		display: flex;
		padding: 10px 0;
	}

	.modal-share-body li:not(:last-child) {
		border-bottom: solid 1px #BBBBBB;
	}

	.modal-share-body ul {
		margin: 0;
		padding: 0 18px;
		width: 100%;
		list-style-type: none;
	}

	.modal-share-body a:hover, .close:hover {
		opacity: .6;
	}

</style>