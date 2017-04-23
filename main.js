TweenMax.to("#face", 2, {x:200, ease:Bounce.easeOut});

TweenMax.from("#face2", 2, {opacity:0, scale:0});

TweenMax.staggerFrom(".stagger-face", 2, {opacity:0, y:200, rotation:360, scale:2}, 0.3)
