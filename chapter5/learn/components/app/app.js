import Strings from '../strings/strings.js';

class WebHarpApp extends HTMLElement {
	connectedCallback() {
		this.innerHTML = '<webharp-strings strings="' + 
			this.getAttribute('strings') + '"></webharp-strings>';
		this.stringElements = this.querySelector('webharp-strings');
		this.addEventListener('mousemove', e => this.onMouseMove(e));
	}
	onMouseMove (event) {
		this.stringElements.points = {
			last: this.lastPoint,
			current: { x: event.pageX, y: event.pageY }
		};
		this.lastPoint = {
			x: event.pageX,
			y: event.pageY
		};
	}
}
if (!customElements.get('webharp-app')){
	customElements.define('webharp-app', WebHarpApp);
}

export default WebHarpApp;
