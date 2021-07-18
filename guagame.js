var Guagame = function (fps, images, runCallback) {
    var g = {
        scene: null,
        actions: {},
        keydowns: {}
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.update = function () {
        g.scene.update && g.scene.update()

    }
    g.draw = function () {
        g.scene.draw()
    }

    g.drawImage = function (guaImage)  {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    g.replaceScene = function(newScene) {
        g.scene = newScene
    }

    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    window.fps = 30
    var runloop = function() {
        // console.log('监听动画')

        // events
        var keys = Object.keys(g.actions)
        for (let i = 0; i < keys.length; i++) {
            var k = keys[i]
            if (g.keydowns[k]) {
                g.actions[k]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()

        setTimeout(function () {
            runloop()
     
         }, 1000/window.fps)
    }

    g.runWithScene = function(scene) {
        g.scene = scene

        setTimeout(function () {
            runloop()
    
        }, 1000/window.fps)
    }

    runCallback(g)


    return g
}
