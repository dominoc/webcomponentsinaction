import Strings from '../strings/strings.js';

class WebHarpApp extends HTMLElement {
	connectedCallback() {
		this.innerHTML = '<webharp-strings strings="' + 
			this.getAttribute('strings') + '"></webharp-strings>';
	}
}
if (!customElements.get('webharp-app')){
	customElements.define('webharp-app', WebHarpApp);
}

export default WebHarpApp;
