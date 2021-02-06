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
		if (this.timer) { clearTimeout(this.timer); }
		let dur = params.power * 10 + 250;
		this.classList.add(
			'shake',
			'shake-constant',
			'shake-horizontal');
		if (dur < 500) {
			this.classList.add('shake-little');
		}
		this.timer = setTimeout( () => this.stopStrum(), dur);
	}
	stopStrum(){
		this.classList.remove('shake', 'shake-constant', 'shake-horizontal', 'shake-little');
	}
};
if (!customElements.get('webharp-string')){
	customElements.define('webharp-string', WebHarpString);
}
export default WebHarpString;
