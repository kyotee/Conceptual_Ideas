export function eventListenerMacro(element, eventsList, action) {
	var events = eventsList.split(' ');

	for (var counter = 0, eventsList = events.length; counter < eventsList; counter++) {
		document.getElementById(element).addEventListener(events[counter], action);
	}
}
