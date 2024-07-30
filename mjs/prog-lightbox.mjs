class ProgLightbox extends HTMLElement {
	#anchorElem;
	#fullImageURL;
	#dialogElem;

	#createDialog() {
        let templateElem = document.querySelector('template[data-matches="prog-lightbox"]');
        if (templateElem) {
            let dialogTemplate = templateElem.content.children[0].cloneNode(true);
            dialogTemplate.querySelector('dialog').setAttribute('id', this.cleanId);
            dialogTemplate.querySelector('img').setAttribute('src', this.#fullImageURL);
            dialogTemplate.querySelector('img').setAttribute('alt', this.alt);
            this.#dialogElem = dialogTemplate;
            document.body.append(this.#dialogElem);
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
		this.#fullImageURL = this.#anchorElem.getAttribute('href');
	}

    get alt() {
        return this.getAttribute('alt');
    }

    get cleanId() {
        return `dialog_${this.#fullImageURL.replace(/\W/g,'_')}`;
    }
}

export default ProgLightbox;