var Block = function(position) {
    // position 是 [0, 0]
    var p = position
    var img = imageFromPath('./img/block.png')
    var o = {
        image: img,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20 ,
        alive: true,
        lifes: p[2] || 1
    }
    o.kill = function() {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }

    }
    o.collide = function(ball) {
        // 判断两个矩形是否相交
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o
}
