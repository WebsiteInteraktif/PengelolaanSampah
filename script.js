for(let pageButton of switcher.children) {
    pageButton.onclick = e => {
      for(let x of switcher.children) x.classList.remove('active');
      e.target.classList.add('active');
      bg.src = 'img/bg/' + e.target.innerText + '.png';
      container.dataset.scene = e.target.innerText;
    }
  }
  for(let sprite of document.querySelectorAll('.sprite')) {
    sprite.onclick = e => {
      popupImg.src = 'img/pop' + e.target.dataset.popupId + '.png';
      popup.classList.add('open');
    }
  }
  popupCloser.onclick = () => popup.classList.remove('open');
  
  const soundImage = document.getElementById('soundImage');
  const myAudio = document.getElementById('myAudio');
  
  let isPlaying = false;
  
  function toggleAudio() {
    if (isPlaying) {
        myAudio.pause();
        soundImage.src = 'img/mute.png';
  
      } else {
        myAudio.play();
        soundImage.src = 'img/play.png';
  
      }
      isPlaying = !isPlaying;
  }
  
  soundImage.addEventListener('click', toggleAudio);

  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});