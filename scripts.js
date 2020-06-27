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
        var a = document.createElement('a');
        a.href = '#' + createIdFromString(BUTTON_AND_TITLE_STRINGS[i]);
        a.style.width = '100%';

        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-light';
        button.style.width = '100%';
        button.innerHTML = BUTTON_AND_TITLE_STRINGS[i];

        a.appendChild(button);
        node.appendChild(a); 
        buildParagrafTitle(i);
        
    }
    return node;
}
function buildParagrafTitle(i){
    var node = document.getElementById('sector-' + i);
    if(node){
        var innerP = node.innerHTML;
        node.innerHTML = '';

        node.appendChild(createPTitleWithIndex(i));
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
    pTitle.id = createIdFromString(BUTTON_AND_TITLE_STRINGS[i]);
    pTitle.innerHTML = BUTTON_AND_TITLE_STRINGS[i];
    return pTitle;
}

function createIdFromString(str){
    str = str.replace(/\s+/g, '-');
    return str.toLowerCase();
}