let secretGift = Math.floor(Math.random()*8) +1;
function startGame(){
document.getElementById("intro").style.display="none";
document.getElementById("game").style.display="block";
}
function checkGift(index){
    const gifts =document.querySelectorAll(".gift");
    if(index===secretGift){
        gifts[index].innerHTML="🙀";
        setTimeout(()=>{
            document.getElementById("game").style.display="none";
            document.getElementById("message").style.display="flex";
            confetti();
document.getElementById("giftsound").play();
document.getElementById("birthdaySong").play();
        },1000);
    }else{
        gifts[index].innerHTML="🙅‍♂️";
        setTimeout(()=>{
            gifts[index].innerHTML="🎁";
        },500);
    }
}

