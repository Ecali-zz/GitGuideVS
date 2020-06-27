 var BUTTON_AND_TITLE_STRINGS = [
    'Download Git',
    'Create new repository'
 ];
$(document).ready(function() { 

    createButtonNav();

});

function createButtonNav(){
    
    var node = document.getElementById('button-nav');

    for(var i =0; i < BUTTON_AND_TITLE_STRINGS.length; i++){
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.innerHTML = BUTTON_AND_TITLE_STRINGS[i];
        node.appendChild(button); 
    }
    return node;
}