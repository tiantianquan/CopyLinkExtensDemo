$('a').on('contextmenu',function(){
    var text = $(this).text();
    chrome.runtime.sendMessage({
        text:text
    });
});

chrome.runtime.onMessage.addListener(
    function(message){
        $(':focus').val(function(index,value){
            return value+message.text;
        });
    }
);