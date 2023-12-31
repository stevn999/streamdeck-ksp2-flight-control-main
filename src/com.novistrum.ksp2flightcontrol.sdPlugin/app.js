/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.novistrum.ksp2flightcontrol.action');



$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Your key code goes here!');
	console.log(action)
	console.log(context)
	console.log(event)
	console.log(payload)

});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});

myAction.onSendToPlugin(({ ActionGroup }) => {
	console.log('Action Group Selection received');
	console.log(ActionGroup);
	$SD.setTitle(ActionGroup)
});

///.\DistributionTool.exe -b -i src\com.novistrum.ksp2flightcontrol.sdPlugin -o Release