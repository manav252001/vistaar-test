function add() {
    var current = document.getElementById('qty').value;
    if(current == 0){
        current = 1;
    }
    else{
        current = parseInt(current) + 1;
    }
    document.getElementById('qty').value = current;
}
function sub() {
    var current = document.getElementById('qty').value;
    if (current > 0) {
        current = parseInt(current) - 1;
    }
    document.getElementById('qty').value = current;
}