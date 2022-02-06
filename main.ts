input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
    basic.pause(1000)
    music.playMelody("G B A G C5 B A B ", 120)
    basic.clearScreen()
})
