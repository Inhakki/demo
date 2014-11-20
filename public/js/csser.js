var channel = 'update-your-styles-sheet-in-real-time';

$('#send-oven-update').bind('click', function() {
    console.log("publishing");
    PUBNUB.publish({
        channel: channel,
        message: {
            'element-id': PUBNUB.$('element-id-to-update').value,
            'css': 'font-size: 72px;',
            'text': 'The oven is now on'
        }
    });
});
PUBNUB.subscribe({
channel: channel,
callback: function(message) {
    PUBNUB.attr(PUBNUB.$(message['element-id']), 'style', message['css']);
}
});