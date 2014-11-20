$(document).ready(function () {
  // Initialize the PubNub API connection.
  var pubnub = PUBNUB.init({
    publish_key: 'pub-c-ea26dd20-006f-47f0-ba38-c423af2eb03a',
    subscribe_key: 'sub-c-a1f35284-651b-11e4-8740-02ee2ddab7fe',
  });
 
  // Grab references for all of our elements.
  // var messageContent = $('#messageContent'),
  //     sendMessageButton = $('.sendMessageButton'),
  //     messageList = $('#messageList');
 
  // Handles all the messages coming in from pubnub.subscribe.
  // function handleMessage(message) {
  //   var messageEl = $("<li class='message'>"
  //       + "<span class='username'>" + message.username + ": </span>"
  //       + message.text
  //       + "</li>");
  //   messageList.append(messageEl);
  //   messageList.listview('refresh');
 
  //   // Scroll to bottom of page
  //   $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 'slow');
  // };
 
  // Compose and send a message when the user clicks our send message button.
  // sendMessageButton.click(function (event) {
  //   var message = messageContent.val();

  //   // $('.username').css('background', '#000');
  //   console.log('yo')
 
  //   if (message != 'no') {
  //     pubnub.publish({
  //       channel: 'chat',
  //       message: {
  //         username: 'test',
  //         text: message
  //       }
  //     });
 
  //     messageContent.val("");
  //   }
  // });
  var channel = 'update-your-styles-sheet-in-real-time';

  // Change CSS

  $('#send-css-update').bind( 'click', function() 
    { console.log("publishing"); 
    pubnub.publish({ 
      channel : channel, 
      message : { 
        'element-id' : pubnub.$('#update-this-with-css'), 
        'css' : pubnub.$('background: black;')
      } 
    }); 
  } );
 
  // Also send a message when the user hits the enter button in the text area.
  // messageContent.bind('keydown', function (event) {
  //   if((event.keyCode || event.charCode) !== 13) return true;
  //   sendMessageButton.click();
  //   return false;
  // });

 
  // Subscribe to messages coming in from the channel.
  pubnub.subscribe({
    channel: channel,
    callback : function(message) { 
      pubnub.attr( 
        pubnub.$(message['element-id']), 
      'style', 
      message['css'] 
      ); 
    } 
  });
});