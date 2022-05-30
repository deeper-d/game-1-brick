var Paddle = function () {
    var img = imageFromPath('./img/paddle.png')
    var o = {
        image: img,
        x: 100,
        y: 240,
        speed: 20,
    }
    o.move = function(x) {
        if (o.x < 0) {
            x = 0
        }
         if (x > 400 - o.image.width) {
            console.log('o.image.width', o.image.width)
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
    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
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

        // var a = o
        // var b = ball
        // if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        //     if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
        //         return true
        //     }
        // }
        // return false
    

    }
    return o

}
