export function loadState() {
	try {
		const serializedState = localStorage.getItem("state");
		if(!serializedState) return [];

		return JSON.parse(serializedState);
	} catch(error) {
		return [];
	}
}

export function saveState(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch(error) {
		console.log(error)
	}
}