

$.(document).ready(function(){
  var parseAppId = '';
  var parseRestKey = '';
  
  getMessages();
  $('#send').click(function(){
    var $sendButton = $(this); //common to prefix jQuery vars with $
    
    $sendButton.html('<img src="img/spinner.gif" width="20">');
    var username= $('input[name=username]').val();
    var message= $('input[name=message]').val();
    
    $.ajax({
      url: 'https://api.parse.com/1/classes/MessageBoard',
      headers:{
        'X-Parse-Application-Id' : parseAppId,
        'X-Parse-REST-API-Key' : parseRestKey
      },
      contentType:'application/json',
      processData: false,
      data: JSON.stringify({
        'username' : username,
        'message' : message
      }),
      type : 'POST',
      success: function(){
        console.log('sent');
        getMessages();
        $sendButton.html('SEND');
      },
      error: function(){
        console.log('error');
        $sendButton.html('SEND');
      }
    })
  })
})