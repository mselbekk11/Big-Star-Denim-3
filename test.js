var x = document.getElementById("#{TOGGLE_ID}");
var y = document.getElementById("#{TOGGLE_ID}");
 
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

