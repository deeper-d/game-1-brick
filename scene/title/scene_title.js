class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)

        game.registerAction('k', function () {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    
    draw() {
        this.game.context.fillText('按 k 开始游戏 ， 按 f 启动小球', 100, 180)
        this.game.context.fillText('按 1/2/3 可选择关卡', 100, 200)
    }
}



// var SceneTitle = function(game) {
//     var s = {
//         game: game
//     }

//     game.registerAction('k', function () {
//         var s = Scene(game)
//         game.replaceScene(s)
//     })

//     s.draw = function() {
//         // draw lable 
//         game.context.fillText('开始游戏 按 k 开始, 按 f 启动小球', 100, 180)
      
//     }
//     return s
// }