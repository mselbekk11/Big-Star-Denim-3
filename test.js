var x = document.getElementById("#{TOGGLE_ID_1}");
var y = document.getElementById("#{TOGGLE_ID_2}");
 
function toggleContainer() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};
 
toggleContainer();


////////////







var x = document.getElementById("#{TOGGLE_ID_1}");
var y = document.getElementById("#{TOGGLE_ID_2}");
 
function toggleContainer() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};
 

function navScenes(){
    var scenes = document.querySelectorAll('[class^="scene"]');
    var sceneClass = scenes[2].className;
    if(scenes.length == 3){
        var sceneClass = scenes[1].className;
    }
    var currentSceneNumber = sceneClass.replace("scene-","");
    document.querySelectorAll('.scene-overlay > .widget-component.link-widget')[0].click();
};

navScenes();
toggleContainer();


