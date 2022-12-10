var hero = document.getElementById('hero');
var obstacle = document.getElementById('obstacle');

function jump(){
    hero.classList.add('animate');
    setTimeout(function(){
        hero.classList.remove('animate');
    },500);
}

var checkStatus =setInterval(function(){
    var heroTop = parseInt( window.getComputedStyle(hero).getPropertyValue("top"));
    var obstacleLeft = parseInt( window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<30 && obstacleLeft>0 && heroTop>=200)
    {    obstacle.style.animation="none";
    obstacle.style.display="none";
    alert("You Lose");}
}
    ,10);