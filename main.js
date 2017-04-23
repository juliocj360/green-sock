const buttonOne = document.getElementById('animation1')
buttonOne.addEventListener('click', () => {
  TweenMax.to("#face", 2, {x:200, ease:Bounce.easeOut, onComplete: () => {
    TweenMax.to("#face", .5, {x:0, delay:1})
  }})
})

const buttonTwo = document.getElementById('animation2')
buttonTwo.addEventListener('click', () => {
  TweenMax.from("#face2", 2, {opacity:0, scale:0, onComplete: () => {
    TweenMax.to("#face2", .5, {opacity:1, scale:1, delay:1})
  }});
})

const buttonThree = document.getElementById('animation3')
buttonThree.addEventListener('click', () => {
  TweenMax.staggerFrom(".stagger-face", 2, {opacity:0, y:200, rotation:360, scale:2, onComplete: () => {
    TweenMax.to(".stagger-face", .5, {opacity:1, y:0, scale:1, rotation:0, delay:1})
  }}, 0.3)
})
