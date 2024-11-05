namespace SpriteKind {
    export const bottom = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const block = SpriteKind.create()
    export const block3 = SpriteKind.create()
    export const block4 = SpriteKind.create()
    export const block2 = SpriteKind.create()
}
function yrt2 () {
    ybr1 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr2 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr3 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr4 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr5 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr6 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr7 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr8 = sprites.create(assets.image`yb`, SpriteKind.block2)
    ybr1.setPosition(10, 25)
    ybr2.setPosition(30, 25)
    ybr3.setPosition(50, 25)
    ybr4.setPosition(70, 25)
    ybr5.setPosition(90, 25)
    ybr6.setPosition(110, 25)
    ybr7.setPosition(130, 25)
    ybr8.setPosition(150, 25)
}
function cekblok2 () {
    if (ybr1.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr1)
    }
    if (ybr2.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr2)
    }
    if (ybr3.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr3)
    }
    if (ybr4.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr4)
    }
    if (ybr5.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr5)
    }
    if (ybr6.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr6)
    }
    if (ybr7.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr7)
    }
    if (ybr8.overlapsWith(fb_bolle)) {
        sprites.destroy(ybr8)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ba == 0) {
        fb_bolle.setStayInScreen(true)
        fb_bolle.setBounceOnWall(true)
        fb_bolle.setVelocity(100, 100)
    } else {
        ba += 1
    }
})
function yrt () {
    yb1 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb2 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb3 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb4 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb5 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb6 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb7 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb8 = sprites.create(assets.image`yb`, SpriteKind.block)
    yb1.setPosition(10, 35)
    yb2.setPosition(30, 35)
    yb3.setPosition(50, 35)
    yb4.setPosition(70, 35)
    yb5.setPosition(90, 35)
    yb6.setPosition(110, 35)
    yb7.setPosition(130, 35)
    yb8.setPosition(150, 35)
}
sprites.onDestroyed(SpriteKind.block4, function (sprite) {
    ceck_done()
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    fb_bolle.setVelocity(randint(1, 100), randint(1, 100))
})
function yrt3 () {
    yte1 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte2 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte3 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte4 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte5 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte6 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte7 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte8 = sprites.create(assets.image`yb`, SpriteKind.block3)
    yte1.setPosition(10, 45)
    yte2.setPosition(30, 45)
    yte3.setPosition(50, 45)
    yte4.setPosition(70, 45)
    yte5.setPosition(90, 45)
    yte6.setPosition(110, 45)
    yte7.setPosition(130, 45)
    yte8.setPosition(150, 45)
}
function cekblok4 () {
    if (yer1.overlapsWith(fb_bolle)) {
        sprites.destroy(yer1)
    }
    if (yer2.overlapsWith(fb_bolle)) {
        sprites.destroy(yer2)
    }
    if (yer3.overlapsWith(fb_bolle)) {
        sprites.destroy(yer3)
    }
    if (yer4.overlapsWith(fb_bolle)) {
        sprites.destroy(yer4)
    }
    if (yer5.overlapsWith(fb_bolle)) {
        sprites.destroy(yer5)
    }
    if (yer6.overlapsWith(fb_bolle)) {
        sprites.destroy(yer6)
    }
    if (yer7.overlapsWith(fb_bolle)) {
        sprites.destroy(yer7)
    }
    if (yer8.overlapsWith(fb_bolle)) {
        sprites.destroy(yer8)
    }
}
sprites.onDestroyed(SpriteKind.block2, function (sprite) {
    ceck_done()
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    fb_bolle.setVelocity(randint(1, 100), randint(1, 100))
})
sprites.onDestroyed(SpriteKind.block3, function (sprite) {
    ceck_done()
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    fb_bolle.setVelocity(randint(1, 100), randint(1, 100))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.block3, function (sprite, otherSprite) {
    cekblok3()
})
sprites.onDestroyed(SpriteKind.block, function (sprite) {
    ceck_done()
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    fb_bolle.setVelocity(randint(1, 100), randint(1, 100))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.bottom, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ball)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.block4, function (sprite, otherSprite) {
    cekblok4()
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    fb_bolle.setVelocity(-100, -100)
    fb_bolle.startEffect(effects.blizzard)
})
function yrt4 () {
    yer1 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer2 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer3 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer4 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer5 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer6 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer7 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer8 = sprites.create(assets.image`yb`, SpriteKind.block4)
    yer1.setPosition(10, 55)
    yer2.setPosition(30, 55)
    yer3.setPosition(50, 55)
    yer4.setPosition(70, 55)
    yer5.setPosition(90, 55)
    yer6.setPosition(110, 55)
    yer7.setPosition(130, 55)
    yer8.setPosition(150, 55)
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.block, function (sprite, otherSprite) {
    cekblok()
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.block2, function (sprite, otherSprite) {
    cekblok2()
})
function cekblok3 () {
    if (yte1.overlapsWith(fb_bolle)) {
        sprites.destroy(yte1)
    }
    if (yte2.overlapsWith(fb_bolle)) {
        sprites.destroy(yte2)
    }
    if (yte3.overlapsWith(fb_bolle)) {
        sprites.destroy(yte3)
    }
    if (yte4.overlapsWith(fb_bolle)) {
        sprites.destroy(yte4)
    }
    if (yte5.overlapsWith(fb_bolle)) {
        sprites.destroy(yte5)
    }
    if (yte6.overlapsWith(fb_bolle)) {
        sprites.destroy(yte6)
    }
    if (yte7.overlapsWith(fb_bolle)) {
        sprites.destroy(yte7)
    }
    if (yte8.overlapsWith(fb_bolle)) {
        sprites.destroy(yte8)
    }
}
function ceck_done () {
    block_cents += -1
    if (block_cents == 0) {
        music.play(music.createSong(assets.song`w`), music.PlaybackMode.UntilDone)
        game.setGameOverEffect(true, effects.confetti)
        game.setGameOverMessage(true, "thank you for playing!!!!!!!!!!!!!!!!")
        game.gameOver(true)
    }
}
function cekblok () {
    if (yb1.overlapsWith(fb_bolle)) {
        sprites.destroy(yb1)
    }
    if (yb2.overlapsWith(fb_bolle)) {
        sprites.destroy(yb2)
    }
    if (yb3.overlapsWith(fb_bolle)) {
        sprites.destroy(yb3)
    }
    if (yb4.overlapsWith(fb_bolle)) {
        sprites.destroy(yb4)
    }
    if (yb5.overlapsWith(fb_bolle)) {
        sprites.destroy(yb5)
    }
    if (yb6.overlapsWith(fb_bolle)) {
        sprites.destroy(yb6)
    }
    if (yb7.overlapsWith(fb_bolle)) {
        sprites.destroy(yb7)
    }
    if (yb8.overlapsWith(fb_bolle)) {
        sprites.destroy(yb8)
    }
}
let yer8: Sprite = null
let yer7: Sprite = null
let yer6: Sprite = null
let yer5: Sprite = null
let yer4: Sprite = null
let yer3: Sprite = null
let yer2: Sprite = null
let yer1: Sprite = null
let yte8: Sprite = null
let yte7: Sprite = null
let yte6: Sprite = null
let yte5: Sprite = null
let yte4: Sprite = null
let yte3: Sprite = null
let yte2: Sprite = null
let yte1: Sprite = null
let yb8: Sprite = null
let yb7: Sprite = null
let yb6: Sprite = null
let yb5: Sprite = null
let yb4: Sprite = null
let yb3: Sprite = null
let yb2: Sprite = null
let yb1: Sprite = null
let ybr8: Sprite = null
let ybr7: Sprite = null
let ybr6: Sprite = null
let ybr5: Sprite = null
let ybr4: Sprite = null
let ybr3: Sprite = null
let ybr2: Sprite = null
let ybr1: Sprite = null
let block_cents = 0
let fb_bolle: Sprite = null
let ba = 0
game.showLongText("3 2 1 go", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`el map`)
ba = 0
let ting = sprites.create(assets.image`ting`, SpriteKind.bottom)
ting.bottom = 123
let pedal = sprites.create(assets.image`pedal`, SpriteKind.Player)
pedal.setPosition(80, 100)
controller.moveSprite(pedal, 100, 0)
pedal.setStayInScreen(true)
fb_bolle = sprites.create(assets.image`fb bolle`, SpriteKind.ball)
fb_bolle.setPosition(80, 71)
yrt()
yrt2()
yrt3()
yrt4()
block_cents = 32
