{/* <div class="main-container">
<div id="overlay" class="start">
  <h2 class="title">Wheel of Success</h2>
  <button class="btn__reset">Start Game</button>
</div> */}


const mainContainer = document.getElementsByClassName('main-container')[0]

mainContainer.addEventListener('click', (e)=>{
    console.log(e.target.textContent)
    if(e.target.textContent==="Start Game"){
    document.getElementById('overlay').style.display="none";
    }
})