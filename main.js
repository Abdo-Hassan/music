window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60b394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#60b2b3'
  ];

  // play sounds here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].play();
      sounds[index].currentTime = 0;
      createBubbles(index);
    });
  });

  // make bubbles
  const createBubbles = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    // remove bubble after animation ends
    bubble.addEventListener('webkitAnimationEnd', () => {
      visual.removeChild(bubble);
    });
    bubble.addEventListener('animationend', () => {
      visual.removeChild(bubble);
    });
  }

});