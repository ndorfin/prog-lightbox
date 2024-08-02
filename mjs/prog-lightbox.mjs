class ProgLightbox extends HTMLElement {
	#anchorElem;
	#imageURL;
	#dialogElem;

	#createDialog() {
		if (this.currentDialog) {
			this.#dialogElem = this.currentDialog;
			return;
		}

		let templateElem = document.querySelector('template[data-matches="prog-lightbox"]');
		if (templateElem) {
			let dialogTemplate = templateElem.content.cloneNode(true);
			dialogTemplate.querySelector('dialog').setAttribute('id', this.cleanId);
			dialogTemplate.querySelector('img').setAttribute('src', this.#imageURL);
			dialogTemplate.querySelector('img').setAttribute('alt', this.alt);
			document.body.append(dialogTemplate);
			this.#dialogElem = this.currentDialog;
		}
	}

	#handleAnchorClick(event) {
		event.preventDefault();
		if (!this.#dialogElem) this.#createDialog();
		this.#dialogElem.showModal();
	}

	connectedCallback() {
		this.#anchorElem = this.querySelector('a');
		this.#anchorElem.addEventListener('click', this.#handleAnchorClick.bind(this));
		this.#imageURL = this.#anchorElem.getAttribute('href');
	}

	get currentDialog() {
		return document.querySelector(`#${this.cleanId}`);
	}

	get alt() {
		let altText = this.getAttribute('alt') || '';
		if (altText) return altText;

		const thumbnail = this.querySelector('img[alt]');
		if (thumbnail) altText = thumbnail.getAttribute('alt') || '';
		return altText;
	}

	get cleanId() {
		return `dialog_${this.#imageURL.replace(/\W/g, '_')}`;
	}
}

export default ProgLightbox;