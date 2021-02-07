import Template from './template.js';

class BizCard extends HTMLElement {
	connectedCallback() {
		this.innerHTML = Template.render({
			first_name: 'Emmett',
			last_name: 'Brown',
			title: 'Student of all Sciences',
			phone: '555-4385',
			email: 'emmett@docbrown.flux',
			website: 'www.docbrown.flux',
			backgroundChoices: [
				{ name: 'big dots', uri: './images/big-dot-pattern.png'},
				{ name: 'little dots', uri: './images/tiny-dot-pattern.png'},
				{ name: 'squares', uri: './images/square-pattern.png'},
				{ name: 'stripes', uri: './images/stripes-pattern.png'},
				{ name: 'diamond', uri: './images/diamond-pattern.png'},
			],
			logoChoices: [
				{ name: 'mobius strip', uri: './images/mobius-logo.png'},
				{ name: 'shopping bag', uri: './images/bag-logo.png'},
				{ name: 'copper splash', uri: './images/splash-logo.png'},
				{ name: 'star', uri: './images/star-logo.png'},
				{ name: 'cone', uri: './images/cone-logo.png'},
			],
		});
		this.dom = Template.mapDOM(this);
		this.dom.backgroundPicker.addEventListener('change', e => this.updateGraphics() );
		this.dom.logoPicker.addEventListener('change', e => this.updateGraphics() );
		this.updateGraphics();
		/*
		this.querySelector('.logo-picker select').addEventListener('change', e => this.updateGraphics());
		this.querySelector('.background-picker select').addEventListener('change', e => this.updateGraphics() );
		*/
	}
	updateGraphics() {
		this.dom.background.style.backgroundImage = `url("${this.dom.backgroundPicker.value}")`;
		this.dom.logo.style.backgroundImage = `url("${this.dom.logoPicker.value}")`;
		/*
		this.querySelector('.biz-card').style.backgroundImage = `url("${this.querySelector('.background-picker select').value}")`;
		this.querySelector('.logo').style.backgroundImage = `url("${this.querySelector('.logo-picker select').value}")`;
		*/
	}
	options(list){
		let choices = ``;
		for (let c=0; c<list.length; c++) {
			choices += `<option value='${list[c].uri}'>${list[c].name}</option>`;
		}
		return `<select>${choices}</select>`;
	}
}
if (!customElements.get('biz-card')) {
	customElements.define('biz-card', BizCard);
}
export default BizCard;

