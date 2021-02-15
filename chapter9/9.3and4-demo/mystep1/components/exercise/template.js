export default {
	render(exercise){
		return `${this.css(exercise)}
			${this.html(exercise)}`;
	},
	html(exercise){
		return `<div id="info">
			<span id="label">${exercise.label}</span>
			<div id="customize">
				<label
					class="${exercise.time?'visible':'hidden'}">
					<input type="number" max="999" style="width:35px;" value="${Number(exercise.time)}"> seconds
				</label>
				<label
					class="${exercise.count?'visible':'hidden'}">
					<input type="number" max="99" style="width:25px;" value="${Number(exercise.count)}">
				</label>
				<label
					class="${exercise.sets?'visible':'hidden'}">
					<input type="number" max="9" style="width:20px;" value="${Number(exercise.sets)}"> set(s)
				</label>
			</div>
			<span id="delete"> x</span>
			</div>`;
	},
	css(exercise){
		return `<style>
				:host {
					display: inline-block;
					background: radial-gradient(circle, rgba(235,235,235,1) 0%, rgba(208,208,208,1) 100%);

					border-left-style: solid;
					border-left-width: 5px;
				}
				:host(.cardio) {
					border-left-color: #28a7ff;
				}
				:host(.strength) {
					border-left-color: #75af01;
				}
				#info {
					font-size: small;
					display: flex;
					align-items: center;
					background-color: black;
					color: white;
				}
				:host(.library) #customize {
					display: none;
				}
				:host(.library) #delete {
					display: none;
				}
				:host(.plan) {
					width: 100%;
					height: 50px;
					margin-bottom: 1px;
					background-size: contain;
				}
				:host(.plan) input {
					background-color: #505050;
					padding: 5px;
					color: white;
					border: none;
				}
				/*
				:host-context(wkout-exercise-lib) {
					width: 200px;
					height: 200px;
					background-size: cover;
				}
				:host-context(wkout-exercise-lib) #info {
					padding: 5px;
				}
				:host-context(wkout-exercise-lib) #customize {
					display: none;
				}
				:host-context(wkout-exercise-lib) #delete {
					display: none;
				}
				:host(wkout-plan) {
					width: 100%;
					height: 50px;
					margin-bottom: 1px;
					background-size: contain;
				}
				:host(wkout-plan) input {
					background-color: #505050;
					padding: 5px;
					color: white;
					border: none;
				}
				:host(wkout-plan) #delete {
					width: 30px;
					height: 100%;
					line-height: 50px;
					font-size: 12px;
					font-family: Arial;
					text-align: center;
					background-color: #404040;
					cursor: pointer;
				}
				:host(wkout-plan) #delete:hover {
					background-color: #797979;
				}
				:host(wkout-plan) #info {
					width: calc(100% - 80px);
					height: 100%;
					margin-left: 75px;
					background-size: 75px 75px;
				}
				:host(wkout-plan) #customize {
					display: inline-block;
					flex: 1;
				}
				:host(wkout-plan) #label {
					padding-left: 10px;
					font-size: 16px;
					font-weight: bold;
					display: inline-block;
					flex: 1;
				}
				:host(wkout-plan) #label.hidden {
					display: none;
				}
				*/
				:host {
					width: 200px;
					height: 200px;
					background-size: cover;

				}
				:host #info {
					padding: 5px;
				}
			</style>`;
	}
}

