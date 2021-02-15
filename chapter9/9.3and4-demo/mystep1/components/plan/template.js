import Exercise from '../exercise/exercise.js'

export default {
	render() {
		return `${this.css()}
			${this.html()}`;
	},
	html() {
		return `<h1>My Plan</h1>
			<div id="container"></div>
			<div id="time">Total Time:</div<`;
	},
	css() {
		return `<style>
				:host {
					display: flex;
					flex-direction: column;
				}
				#time {
					height: 30px;
				}
				#container {
					background: linear-gradient(90 deg, rgba(235,235,235,1) 0%, rgba(208,208,208,1) 100%);
					height: calc(100% - 60px);
					overflow-y: scroll;
				}
			</style>`;
	},
	mapDOM(scope) {
		return {
			exercises: scope.querySelector('#container')
		}
	},
	renderExercise(exercise) {
		return `<wkout-exercise class="${exercise.type}"
			${Exercise.toAttributeString(exercise.serialize())}></wkout-exercise>`
	}
}
