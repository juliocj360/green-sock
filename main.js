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

const animationFourLoader = () => {
  const animateButton = document.getElementById('animation4')
  const pauseButton = document.getElementById('pause')
  const resumeButton = document.getElementById('resume')
  const resetButton = document.getElementById('reset')
  let tween

  animateButton.addEventListener('click', () => {
    tween = TweenMax.to("#face4", 6, {left:"400px", rotationX:360})
    tween.play()
  })

  pauseButton.addEventListener('click', () => tween.pause())
  resumeButton.addEventListener('click', () => tween.resume())
  resetButton.addEventListener('click', () => {
    TweenMax.to("#face4", .3, {left:0, rotationX:0})
  })
}

const animationFiveLoader = () => {
  const buttonFive = document.getElementById('button5')
  buttonFive.addEventListener('click', () => {
    TweenMax.to("#animate5", 2, {backgroundColor: 'rgb(88, 97, 112)', borderWidth: 3, borderColor: 'rgb(34, 193, 45)', borderStyle: 'solid', borderRadius: 0, onComplete: () => {
          TweenMax.to("#animate5", .3, {backgroundColor: 'white', borderWidth: 0, borderColor: 'black', borderStyle: 'none', borderRadius: '10px', delay: 1})
    }})
    TweenMax.to("#button5", 2, {backgroundColor: 'white', color: 'black', borderRadius: 0, onComplete: () => {
      TweenMax.to("#button5", .3, {backgroundColor: 'black', color: 'white', borderRadius: '10px', delay: 1})
    }})
  })
}

const tester = document.getElementById('test')
console.log(window)
//console.log("x", tester.scrollX)

animationFiveLoader()
animationFourLoader()
buttonThreeAdder()
buttonTwoAdder()
buttonOneAdder()
