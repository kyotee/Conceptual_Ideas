// Event Listener Macro
// PRE: element parameter must be id's
// POST: event listeners for multiple id's and events using the same function
// PARAMS: element=string of id's separated by spaces; eventsList=string of events separated by spaces;
//         action=function
export function eventListenerMacro(element, eventsList, action) {
	var events = eventsList.split(' ');
	var elements = element.split(' ');

	for (var eventsCounter = 0, eventsList = events.length; eventsCounter < eventsList; eventsCounter++) {
		for (var elementsCounter = 0, elementsList = elements.length; elementsCounter < elementsList; elementsCounter++)
			document.getElementById(elements[elementsCounter]).addEventListener(events[eventsCounter], action);
	}
}
