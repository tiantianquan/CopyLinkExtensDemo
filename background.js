// function addContextMenu() {
//     chrome.contextMenus.create({
//         id: 'copy',
//         title: 'copy',
//         contexts: ['link'],
//         onclick: function(a) {
//             // var inj = new chrome.tabs.InjectDetails();
//             // inj.file = './execute.js';
//             // chrome.tabs.executeScript({
//             //     file:'execute.js'
//             //     // code: 'alert(1)'
//             // });
//             // alert(text);
//         }
//     })
// }


// addContextMenu();

var text="";
var s="";

//建立右键菜单项
chrome.contextMenus.create({
    id: 'copy',
    title: 'Copy Link Text',
    contexts: ['link'],
    onclick: function(){},
    }
);

chrome.contextMenus.create({
    id:'paste',
    title:'Paste',
    contexts:['editable'],
    onclick: function(){
        chrome.tabs.query({active:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text:text});
        })
    }
});


//监听contentjs的请求,拿到text,更新onclick事件,进行输出
chrome.runtime.onMessage.addListener(
    function(message,sender){
        chrome.contextMenus.update('copy',{
            onclick: function(){
                text = message.text;
            }
        })
    }
)