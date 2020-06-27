 var BUTTON_AND_TITLE_STRINGS = [
    'Download Git',
    'Create new repository'
 ];
 var LOREM_IPSUM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. ';
$(document).ready(function() { 

    createButtonNav();

});

function createButtonNav(){
    
    var node = document.getElementById('button-nav');

    for(var i = 0; i < BUTTON_AND_TITLE_STRINGS.length; i++){
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.innerHTML = BUTTON_AND_TITLE_STRINGS[i];
        node.appendChild(button); 
        buildParagrafTitle(i);
        
    }
    return node;
}
function buildParagrafTitle(i){
    var node = document.getElementById('sector-' + i);
    if(node){
        var pTitle = document.createElement('p');
        var innerP = node.innerHTML;
        node.innerHTML = '';
        pTitle.className = 'display-4';
        pTitle.innerHTML = BUTTON_AND_TITLE_STRINGS[i];

        node.appendChild(pTitle);
        node.innerHTML += innerP;
    }else{
        node = document.getElementById('p-container');
         var p = document.createElement('p');
         p.className = 'lead';
         p.id = 'sector-' + i;
         
         p.appendChild(createPTitleWithIndex(i));
         p.innerHTML += LOREM_IPSUM;
         node.appendChild(p);

    }
    
}
function createPTitleWithIndex(i){
    var pTitle = document.createElement('p');
    pTitle.className = 'display-4';
    pTitle.innerHTML = BUTTON_AND_TITLE_STRINGS[i];
    return pTitle;
}