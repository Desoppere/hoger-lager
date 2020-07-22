input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.pause(500)
    if (volgendeNummer < nummer) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        score += 1
        nummer = volgendeNummer
        volgendeNummer = randint(0, 10)
        basic.showNumber(nummer)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.showNumber(volgendeNummer)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("score")
        basic.showNumber(score)
    }
})
input.onGesture(Gesture.Shake, function () {
    nummer = randint(0, 100)
    volgendeNummer = randint(0, 100)
    score = 0
    basic.pause(500)
    basic.showNumber(nummer)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.pause(500)
    if (volgendeNummer > nummer) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        score += 1
        nummer = volgendeNummer
        volgendeNummer = randint(0, 10)
        basic.showNumber(nummer)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.showNumber(volgendeNummer)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("score")
        basic.showNumber(score)
    }
})
let score = 0
let volgendeNummer = 0
let nummer = 0
nummer = randint(0, 100)
volgendeNummer = randint(0, 100)
score = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.clearScreen()
basic.pause(200)
basic.showNumber(nummer)
basic.forever(function () {
	
})
