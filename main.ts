input.onButtonPressed(Button.A, function () {
    if (true) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P0, 100)
    basic.pause(0o1)
    pins.analogWritePin(AnalogPin.P1, 100)
    basic.pause(0o1)
    pins.analogWritePin(AnalogPin.P2, 100)
    basic.pause(0o1)
    pins.analogWritePin(AnalogPin.P3, 100)
    basic.pause(0o1)
    pins.analogWritePin(AnalogPin.P4, 100)
    basic.pause(0o1)
    pins.analogWritePin(AnalogPin.P5, 100)
})
