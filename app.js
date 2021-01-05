const overLay = document.getElementById('overlay')
const bodyTag = document.getElementsByTagName('body')[0];
const section = document.getElementById('qwerty');
const divPhrase = document.getElementById('phrase');
const ulList = document.getElementsByClassName('ul-list')[0]
let countedMiss = 0;
const phrases = ['the fat cat','scary spider','fast little rabbit', 'fast ninja', ' big sleepy frog','worm in an apple'];
const mainContainer = document.getElementsByClassName('main-container')[0];
///=================

//^^^^^^^^^^out put of the randomPhrases()^^^^^^^^^^
// let parcedArr= [];
let buttons = document.getElementsByTagName('button')
function getRandomPhrase (arr){
let randomPhrase = phrases[Math.floor(Math.random()*arr.length)]
console.log(randomPhrase)
var parcedArr = [];
for (let i=0; i<randomPhrase.length;i++){
  parcedArr.push(randomPhrase[i])  
}
return parcedArr
}


function addTooUl(arr) {
  for( let i=0; i<arr.length; i++){
  let newList = document.createElement('LI');
  newList.innerText = arr[i]
  ulList.appendChild(newList);  
  if (newList.innerText !== ""){    
    newList.className= 'letter'
    }
  }
}


function checkLetter(clickedButton){
  let addedLetter= document.getElementsByClassName('letter');
  console.log(addedLetter)
  var matchedLetter = null
  for(let i =0; i<addedLetter.length;i++){  
    if(clickedButton.innerText == addedLetter[i].innerText){
      addedLetter[i].className ='letter show';
     matchedLetter =  clickedButton.innerText; 
    }
    }
    return matchedLetter}
function checkForWin(){
  let shownLetters =document.getElementsByClassName('show').length;
  let allLetterOptions= document.getElementsByClassName('letter').length;
  let title = document.querySelector('.title');
    let button = document.querySelector('.btn__reset')
  if(countedMiss>=5){
    overLay.style.display='';
    overLay.className= 'lose'
    title.innerText = 'YOU LOSE'
    button.innerText = "play again?"
    console.log(button)
  }else if(shownLetters >= allLetterOptions){
    console.log(shownLetters)
    console.log(allLetterOptions)
    overLay.className= 'win'
    overLay.style.display=''
    console.log(overLay)
  
  
    title.innerText = 'YOU WON'
    button.innerText = "play again"
  }

}

  




// ==================actions================


// console.log(pickedPhrase)
document.getElementById('overlay')
.addEventListener('click', (e)=>{
  
    overLay.style.display="none";
  

}
)




//====((letter variavles""??"))======

section.addEventListener('click',(e)=>{
  var keyButtons = document.getElementsByTagName('button')
  for (let i =0; i< keyButtons.length; i++){
    if (keyButtons[i].innerText == e.target.innerText){
      keyButtons[i].className ='chosen'
      keyButtons[i].disabled=true;
      var letterFound =checkLetter(e.target)
      if(letterFound === null){
        const trys = document.getElementsByClassName('tries')
        const liParent =trys[0].parentNode;
        liParent.removeChild(trys[0])
        countedMiss +=1;
      }
      checkForWin();
      reset()
    }
    }
  }

)
  


const phrasesArray =getRandomPhrase(phrases)
//^^^^THIS FIRST PICK A RANDOM PHRASE FROM ARRY "VAR"
addTooUl(phrasesArray)
