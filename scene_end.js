var SceneEnd = function(game) {
    var s = {
        game: game
    }

    s.draw = function() {
        // draw lable 
        game.context.fillText('game over!', 100, 180)
      
    }
    return s
}