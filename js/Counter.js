var subtract = function(){
    var currentNbr = document.getElementById("counter");
    currentNbr.value = (--currentNbr.value);
    

}
var add = function(){
    var currentNbr = document.getElementById("counter");
    currentNbr.value = (++currentNbr.value);
    

}
var loaded = () => {
    var currentNbr;
    currentNbr.value = "counter";
}