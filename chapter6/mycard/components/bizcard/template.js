export default {
	render(props) {
		return
		`
		${this.html(props)}
		${this.css(props)}
		`;
	},
	html(p) { 
		return 
		`
		<div class='logo-picker'>
			Logo: ${this.options(p.logoChoices)}
		</div>
		<div class='background-picker'>Background:
			${this.options(p.backgroundChoices)}
		</div>
		<div class='biz-card'>
			<div class='logo'></div>
			<div class='top-text'>
				<h1>${p.first_name} ${p.last_name}</h1>
				<h3>${p.title}</h3>
			</div>
			<div class='bottom-text'>
				<h3>phone: ${p.phone}</h3>
				<h3>${p.email} / ${p.website}</h3>
			</div>
		</div>
		`; 
	},
	css(p) {
		return ``;
	},
	mapDOM(scope) {
		return {
			logoPicker: scope.querySelector('.logo-picker select'),
			backgroundPicker: scope.querySelector('.background-picker select'),
			logo: scope.querySelector('.logo'),
			background: scope.querySelector('.biz-card')
		}
	},
}

