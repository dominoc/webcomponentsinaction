import Template from './template.js';

class Slider extends HTMLElement {
	connectedCallback() {
		this.innerHTML = Template.render();
		this.dom = Template.mapDOM(this);

		document.addEventListener('mousemove', e => this.eventHandler(e));
		document.addEventListener('mouseup', e => this.eventHandler(e));
		this.addEventListener('mousedown', e => this.eventHandler(e));

		this.refreshSlider(this.getAttribute('value'));
		this.setColor(this.getAttribute('backgroundcolor'));
	}
	static get observedAttributes() {
		return ['value', 'backgroundcolor'];
	}

	attributeChangedCallback(name, oldVal, newValue) {
		switch (name) {
			case 'value':
				this.refreshSlider(newValue);
				break;

			case 'backgroundcolor':
				this.setColor(newValue);
				break;
		}
	}

	set value(val) {
		this.setAttribute('value', val);
	}

	get value() {
		return this.getAttribute('value');
	}

	set backgroundcolor(val) {
		this.setAttribute('backgroundcolor', val);
	}

	get backgroundcolor() {
		return this.getAttribute('backgroundcolor');
	}

	setColor(color) {
		if (this.dom) {
			this.dom.overlay.style.background = `linear-gradient (to right, ${color} 0%, ${color}00 100%)`
		}
	}
	refreshSlider(value) {
		if (this.dom) {
			this.dom.thumb.style.left = (value / 100 * this.offsetWidth - this.dom.thumb.offsetWidth / 2) + 'px';
		}
	}
	updateX(x) {
		let hPos = x - this.dom.thumb.offsetWidth/2;
		if (hPos > this.offsetWidth) {
			hPos = this.offsetWidth;
		}
		if (hPos < 0) {
			hPos = 0;
		}
		this.value = (hPos / this.offsetWidth) * 100;
	}

	eventHandler(e) {
		const bounds = this.getBoundingClientRect();
		const x = e.clientX - bounds.left;

		switch (e.type) {
			case 'mousedown':
				this.isDragging = true;
				this.updateX(x);
				this.refreshSlider(this.value);
				break;

			case 'mouseup':
				this.isDragging = false;
				break;

			case 'mousemove':
				if (this.isDragging) {
					this.updateX(x);
					this.refreshSlider(this.value);
				}
				break;
		}
	}
}
if (!customElements.get('wcia-slider')){
	customElements.define('wcia-slider', Slider);
}

export default Slider;

