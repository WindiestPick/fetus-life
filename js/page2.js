var width = 0;
document.addEventListener('keyup', function(event) {
    var elem = document.getElementById("myBar");   
    if(event.keyCode == 32) {
        if (width >= 100) {
            document.getElementById("myP").className = "w3-text-green w3-animate-opacity";
            document.getElementById("myP").innerHTML = "Successfully uploaded 10 photos!";
        } else {
            width = width + 5;  
            elem.style.width = width + '%'; 
            var num = width * 1 / 10;
            num = num.toFixed(0)
            document.getElementById("demo").innerHTML = num;
        }
    };
});
