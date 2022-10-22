class Object{
    constructor(position, id, location){
        this.position = position;
        this.id = id;
        this.location = location;
        this.deleted = 0;
    }
    criaObj(div){
        let posi;
        if(this.position == 1){
            posi = "275px";
        }else if(this.position == 2){
            posi = "200px";
        }else if(this.position == 3){
            posi = "350px"
        }
        div.innerHTML += "<div style='top:"+ posi +"; left:750px;' id='obj" + this.id + "' class='object'></div>";
    }
    moveObj(num){
        if (this.deleted == 1){
            return
        }
        let obj = document.getElementById("obj" + this.id);
        let add = this.location - num;
        obj.style.left = add + "px";
        this.location = add;
    }
    deletObj(){
        let obj = document.getElementById("obj" + this.id).remove();
        this.deleted = 1;
    }
}

var id = null;
function myMove() {
    var map = document.getElementById("map")
    var pos = 70;
    var objList = [];
    var pts = 0
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pts == 50){
            clearInterval(id);
            window.location.href = "./page2.html";
            return;
        }
        var elem = document.getElementById("top");   
        var elem2 = document.getElementById("down");
        pos = pos + 2; 
        elem.style.backgroundPositionX = -pos + 'px';
        elem2.style.backgroundPositionX = -pos + 'px';
        if(random(1,175) == 50){
            let nObj = new Object(random(1, 3),objList.length,750);
            nObj.criaObj(map);
            objList.push(nObj);
        }
        let player = document.getElementById("player");
        for(i = 0; i < objList.length; i++){
            objList[i].moveObj(2);
            if (objList[i].location == 0 && objList[i].deleted == 0){
                objList[i].deletObj();
                pts++;
                
            }
            let r;
            if (objList[i].location > 70 && objList[i].location < 120){
                if (player.style.top == '200px' && objList[i].position == 2){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }else if(player.style.top == '275px' && objList[i].position == 1){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }else if(player.style.top == '350px' && objList[i].position == 3){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }
            }else if(objList[i].location + 50 > 70 && objList[i].location + 50 < 120){
                if (player.style.top == '200px' && objList[i].position == 2){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }else if(player.style.top == '275px' && objList[i].position == 1){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }else if(player.style.top == '350px' && objList[i].position == 3){
                    clearInterval(id);
                    alert("Fim de jogo");
                    window.location.href = "../index.html";
                }
            }
        }
        
    }
}

var calc = 275;
document.addEventListener('keydown', function(event) {
    var elem3 = document.getElementById("player");  
    if(event.keyCode == 38) {
        calc = calc - 75;
        if(calc > 175){
            elem3.style.top = calc + "px";
        }else{
            calc = calc + 75;
        }
    }
    else if(event.keyCode == 40) {
        calc = calc + 75;
        if(calc < 425){
            elem3.style.top = calc + "px";
        }else{
            calc = calc - 75;
        }
    }
    else if(event.keyCode == 37){
        clearInterval(id);
    }
});



function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


myMove();

