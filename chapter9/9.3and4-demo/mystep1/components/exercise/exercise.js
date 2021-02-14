import Template from './template.js';

export default class Exercise extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		
		const params = {
			label: this.getAttribute('label'),
			type: this.getAttribute('type'),
			thumb: this.getAttribute('thumb'),
			time: this.getAttribute('time'),
			count: this.getAttribute('count'),
			estimatedTimePerCount: this.getAttribute('estimatedTimePerCount'),
			sets: this.getAttribute('sets'),
		}
		this.shadowRoot.innerHTML = Template.render(params);
	}
	get label() { 
		return this.getAttribute('label'); 
	}
	set label(val) {
		this.setAttribute('label', val);
	}

	serialize() {
		return {
			label: this.label,
			type: this.type,
			thumb: this.thumb,
			time: this.time,
			count: this.count,
			estimatedTimePerCount: this.estimatedTimePerCount,
			sets: this.sets,
		}
	}
	static toAttributeString(obj) {
		let attr = '';
		for (let key in obj) {
			if (obj[key]){
				attr += key + '="' + obj[key] + '" ';
			}
		}
		return attr;
	}
}

if (!customElements.get('wkout-exercise')) {
	customElements.define('wkout-exercise', Exercise);
}

