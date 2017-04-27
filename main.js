const buttonOneAdder = () => {
  const buttonOne = document.getElementById('animation1')
  buttonOne.textContent = 'animate'
  const test = () => {
    const tween = TweenMax.to("#face", 2, {x:400, ease:Bounce.easeOut, onComplete: () => {
      TweenMax.to("#face", .3, {x:0, delay:1})
    }})
  }
  buttonOne.addEventListener('click', test)
}

const buttonTwoAdder = () => {
  const buttonTwo = document.getElementById('animation2')
  buttonTwo.addEventListener('click', () => {
    TweenMax.to("#face2", 2, {opacity:1, scale:1, onComplete: () => {
      TweenMax.to("#face2", .3, {opacity:0, scale:0, delay:1})
    }});
  })
}

const buttonThreeAdder = () => {
  const buttonThree = document.getElementById('animation3')
  buttonThree.addEventListener('click', () => {
    TweenMax.staggerFrom(".stagger-face", 2, {opacity:0, y:200, rotation:360, scale:2, onComplete: () => {
      TweenMax.to(".stagger-face", .3, {opacity:1, y:0, scale:1, rotation:0, delay:1})
    }}, 0.3)
  })
}

const pauser = (button, tween) => {
  console.log('poop4')
  button.textContent = 'pause'
  const test2 = () => {
    console.log('poop5')
    button.removeEventListener('click', test2)
    tween.pause()
    resumer(button, tween)
  }
  button.addEventListener('click', test2)
}

const resumer = (button, tween) => {
  console.log('poop6')
  button.textContent = 'resume'
  const test3 = () => {
    console.log('poop7')
    button.removeEventListener('click', test3)
    tween.resume()
    pauser(button, tween)
  }
  button.addEventListener('click', test3)
}

buttonThreeAdder()
buttonTwoAdder()
buttonOneAdder()
