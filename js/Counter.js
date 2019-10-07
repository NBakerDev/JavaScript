let nbr = 0;

var display = () => {
    var currentNbr = document.getElementById("counter");
    currentNbr.value = nbr;
}

var subtract = function(){
    nbr--;
    display();
    

}
var add = function(){
    nbr++;
    display();
    

}
var loaded = () => {
    display()
}
