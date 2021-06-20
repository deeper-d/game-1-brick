var Ball = function () {
    var img = imageFromPath('./img/ball.png')
    var o = {
        image: img,
        x: 80,
        y: 80,
        speedx: 10,
        speedy: 10,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            console.log('ball move')
            if  (o.x < 0 || o.x > 400) {
                o.speedx = -o.speedx
            }
            if  (o.y < 0 || o.y > 300) {
                o.speedy = -o.speedy
            }
            o.x += o.speedx
            o.y += o.speedy
        }
    }
    o.反弹 = function() {
        o.speedy *= -1
    }
    return o

}
