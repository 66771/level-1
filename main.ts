scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    a = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    b = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    d = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    c = 1
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (a == 1 && b == 1) {
        if (c == 1 && d == 1) {
            game.over(true)
        }
    }
})
info.onLifeZero(function () {
    game.over(false)
})
let c = 0
let d = 0
let b = 0
let a = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`级别1`)
game.showLongText("Level 1", DialogLayout.Bottom)
info.startCountdown(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 f 5 5 f 5 . . . 
    . 5 5 5 5 5 5 5 f 5 5 f 5 5 . . 
    . 5 5 5 5 5 5 5 f 5 5 f 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
a = 0
b = 0
mySprite.setPosition(7, 7)
