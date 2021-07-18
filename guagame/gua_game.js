class Guagame {
    constructor(fps, images, runCallback) {
        window.fps = 30
        this.fps = fps 
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        // 
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        // events
        let self = this
        window.addEventListener('keydown', function (event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        // 初始化数据
        this.init()
    }

    init() {
        this.start()
    }

    update() {
        this.scene.update && this.scene.update()

    }
    draw() {
        this.scene.draw()
    }

    drawImage(guaImage)  {
        this.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    replaceScene (newScene) {
        this.scene = newScene
    }

    runWithScene(scene) {
        let self = this
        self.scene = scene
        setTimeout(function () {
            self.runloop()
    
        }, 1000/window.fps)
    }

    runloop() {
        var g = this
        // console.log('监听动画')

        // events
        var actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            var k = actions[i]
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
        // next run loop
        setTimeout(function () {
            g.runloop()
     
         }, 1000/window.fps)
    }

    start() {
        this.runCallback(this)
    }

}


// var Guagame = function (fps, images, runCallback) {
//     var g = {
//         scene: null,
//         actions: {},
//         keydowns: {}
//     }
//     var canvas = document.querySelector('#id-canvas')
//     var context = canvas.getContext('2d')
//     g.canvas = canvas
//     g.context = context

//     g.update = function () {
//         g.scene.update && g.scene.update()

//     }
//     g.draw = function () {
//         g.scene.draw()
//     }

//     g.drawImage = function (guaImage)  {
//         g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
//     }

//     g.replaceScene = function(newScene) {
//         g.scene = newScene
//     }

    

//     window.fps = 30
//     var runloop = function() {
//         // console.log('监听动画')

//         // events
//         var keys = Object.keys(g.actions)
//         for (let i = 0; i < keys.length; i++) {
//             var k = keys[i]
//             if (g.keydowns[k]) {
//                 g.actions[k]()
//             }
//         }
//         // update
//         g.update()
//         // clear
//         g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
//         // draw
//         g.draw()

//         setTimeout(function () {
//             runloop()
     
//          }, 1000/window.fps)
//     }

//     g.runWithScene = function(scene) {
//         g.scene = scene

//         setTimeout(function () {
//             runloop()
    
//         }, 1000/window.fps)
//     }

//     runCallback(g)


//     return g
// }
