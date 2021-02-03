class WebHarpString extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			`
			<div class='line'></div>
			<style>
				webharp-string > .line {
					background-color: white;
					height: 100%;
					width: 2px;
					}
			</style>
			`
	}
	strum(params){
	}
	stopStrum(){
	}
};
if (!customElements.get('webharp-string')){
	customElements.define('webharp-string', WebHarpString);
}
export default WebHarpString;
