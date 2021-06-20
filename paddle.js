var Paddle = function () {
    var img = imageFromPath('./img/paddle.png')
    var o = {
        image: img,
        x: 100,
        y: 260,
        speed: 15,
    }
    o.move = function(x) {
        if (o.x < 0) {
            x = 0
        }
         if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)
    }
    o.moveRight = function () {
        o.move(o.x + o.speed)
    }
    o.collide = function(ball) {
        // 判断两个矩形是否相交
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        } else {
            return false
        }

    }
    return o

}
