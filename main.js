var blocks = []
var paused = false
var __mian = function () {
    var enableDebugMode = function(enable) {
    if (!enable) {
        return
    }
    window.addEventListener('keydown', function(event) {
        let k = event.key
        if (k === 'p') {
            paused = !paused 
        } else if ('123456'.includes(k)) {
            console.log(k)
            blocks = loadLevel(Number(k))
        }
    })
    // 控制speed
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var fps = event.target.value
        window.fps = fps
    })
}

var loadLevel = function(n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p)
        blocks.push(b)
    }
    return blocks
}


    enableDebugMode(true)
    // 封装 game
    var game = Guagame(20)
    // 封装  paddle
    var paddle = Paddle()
    var ball = Ball()
    // var block = Block()
    blocks = loadLevel(1)

    // register actions
    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })

    game.update = function () {
        if (paused) {
            return
        }
        ball.move()
        // 判断相撞
        if (paddle.collide(ball)) {
            ball.反弹()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.反弹()
            }
        }

        
    }
    game.draw = function () {
        game.drawImage(paddle)
        game.drawImage(ball)
        
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)   
            }  
        }

        // draw lable 
        game.context.fillText('HELLO GAU', 10, 280)
        // draw 背景
        game.context.fillStyle = "#553"
                   
    }

    var enableDrag = false
    // mouse event 
    document.addEventListener("mousedown", function(e) {
        var x = e.offsetX
        var y = e.offsetY
        console.log('x y', x, y, ball.w)
        // 检查是否点中了小球
        if (ball.hasPoint(x, y)) {
            // 点中 设置 拖拽状态
            enableDrag = true
        }
    })
    document.addEventListener("mousemove", function(e) {
        var x = e.offsetX
        var y = e.offsetY
        // 检查是否点中了小球
        if (enableDrag) {
            // 点中 设置 拖拽状态
            ball.x = x
            ball.y = y
        }
    })
    document.addEventListener("mouseup", function(e) {
        enableDrag = false
    })


}

__mian()