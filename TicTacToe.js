let audio1=new Audio('mixkit-arcade-game-jump-coin-216 (2).wav');
let audio2=new Audio('click-for-game-menu-131903.mp3');
let audio3=new Audio('mixkit-arcade-space-shooter-dead-notification-272.wav');
let audio5=new Audio('mixkit-achievement-completed-2068.wav');
let btncss=document.getElementsByClassName("button");
 
let winarr=['a','b','c','d','e','f','g','h'];
step="X";

function getNum(num)
{
    if(step=="X")
    {
        document.getElementsByClassName("button")[num].value="X";
        document.getElementsByClassName("button")[num].disabled=true;
        winarr[num]=step;
        audio1.play();
        getWinner()
        step="O"; 

    }
    else{
        document.getElementsByClassName("button")[num].value="O";
        document.getElementsByClassName("button")[num].disabled=true;
        winarr[num]=step;
        audio2.play();
        getWinner()
        step="X"; 

    }
}

winner=false;

function getWinner(num)
{
    
    if((winarr[0]==winarr[1] && winarr[1]==winarr[2]))
    {
           document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
           audio5.play();
           btncss[0].style.color="red";
           btncss[1].style.color="red";
           btncss[2].style.color="red";
           disabled();
           
           
    }
    else if((winarr[3]==winarr[4] && winarr[4]==winarr[5]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[3].style.color="red";
        btncss[4].style.color="red";
        btncss[5].style.color="red";
        disabled();
           
    }
    else if((winarr[6]==winarr[7] && winarr[7]==winarr[8]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[6].style.color="red";
        btncss[7].style.color="red";
        btncss[8].style.color="red";
        disabled();
           
    }
    else if((winarr[0]==winarr[3] && winarr[3]==winarr[6]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[0].style.color="red";
        btncss[3].style.color="red";
        btncss[6].style.color="red";
        disabled();
           
    }
    else if((winarr[1]==winarr[4] && winarr[4]==winarr[7]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[1].style.color="red";
        btncss[4].style.color="red";
        btncss[7].style.color="red";
        disabled();
           
    }
    else if((winarr[2]==winarr[5] && winarr[5]==winarr[8]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[2].style.color="red";
        btncss[5].style.color="red";
        btncss[8].style.color="red";
        disabled();
           
    }
    else if((winarr[0]==winarr[4] && winarr[4]==winarr[8]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[0].style.color="red";
        btncss[4].style.color="red";
        btncss[8].style.color="red";
        disabled();
           
    }
    else if((winarr[2]==winarr[4] && winarr[4]==winarr[6]))
    {
        document.getElementById("turn").innerHTML=`<h1>Player ${step} Won</h1>`
        audio5.play();
        btncss[2].style.color="red";
        btncss[4].style.color="red";
        btncss[6].style.color="red";
        disabled();
           
    }

    else if((winarr[0]=="X" || winarr[0]=="O") && (winarr[1]=="X" || winarr[1]=="O")&&    (winarr[2]=="X" || winarr[2]=="O")&&(winarr[3]=="X" || winarr[3]=="O") && (winarr[4]=="X" || winarr[4]=="O")&&(winarr[5]=="X" || winarr[5]=="O")&&(winarr[6]=="X" || winarr[6]=="O") && (winarr[7]=="X" || winarr[7]=="O")&&(winarr[8]=="X" || winarr[8]=="O"))
    {
        document.getElementById("turn").innerHTML=`<h2>Match Tie</h2>`
        audio3.play();
        
    }
    else{
     if(step=="O")
     {
        document.getElementById("turn").innerHTML=`<h2>X Turn</h2>`
     }
     else
     {
        document.getElementById("turn").innerHTML=`<h2>O Turn</h2>`

     }
    }
   

}

function restart()
{
   location.reload();
}

function disabled()
{
    let buttons=document.getElementsByTagName('input')
    for(let btns of buttons)
       {
          btns.disabled=true;
       }
}