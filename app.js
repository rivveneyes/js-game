const bodyTag = document.getElementsByTagName('body')[0];
const section = document.getElementById('qwerty');
const divPhrase = document.getElementById('phrase');
const ulList = document.getElementsByClassName('ul-list')[0]
const countedMiss = 0;
const phrases = ['the fat cat','scary spider','fast little rabbit', 'fast ninja', ' big sleepy frog','worm in an apple'];
const mainContainer = document.getElementsByClassName('main-container')[0];
let randomPhrase = '';
let parcedArr= [];
let varLetter = '' 
let buttons = document.getElementsByTagName('button')
const getRandomPhrase =(arr)=>{
randomPhrase = phrases[Math.floor(Math.random()*arr.length)]
console.log(randomPhrase)
console.log(randomPhrase.length +'#phrase lenth')
}

function parceArry(arr){  
  for (let i=0; i<arr.length;i++){
    parcedArr.push(arr[i])
    
  }
}

function addTooUl(arr) {
  for( let i=0; i<arr.length; i++){
  let newList = document.createElement('LI');
  newList.innerText= parcedArr[i];    
  if (newList.innerText !== " "){    
    newList.className= 'letter'
    }
  ulList.appendChild(newList);  
  }
console.log( ulList)// searching for if statment input

}
//compare letter that will conside with input and if match add "show"
function checkLetter(letter){
  
  let addedLetter= document.getElementsByClassName('letter');
  for(let i =0; i<addedLetter.length;i++){
    
    let listedLetter = addedLetter[i].innerText
    if (letter === listedLetter){
      addedLetter[i].className ='letter show'
      varLetter= letter  
      console.log(varLetter);
  }
  else{
    varLetter=null
  }
}
}





// ==================actions================


// console.log(pickedPhrase)
mainContainer.addEventListener('click', (e)=>{
    
    if(e.target.textContent==="Start Game"){
    document.getElementById('overlay').style.display="none";
    }

}
)

//====((letter variavles""??"))======
let letterFound = ''
bodyTag.addEventListener('keypress', (e)=>{
  
  for (let i= 0; i<buttons.length; i++){
   if( buttons[i].innerText == e.key ){
    buttons[i].className='chosen'
    checkLetter(e.key)
    buttons[i].disabled=true;
    
   }; 
    
    }
    
  })

  
  // if(document.getElementsByTagName('button').innerText == e.key){
  //   console.log('marker')
  // }



getRandomPhrase(phrases)
parceArry(randomPhrase)
addTooUl(parcedArr)

console.log(varLetter+'  found the')