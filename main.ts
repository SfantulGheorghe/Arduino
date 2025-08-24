input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        unus += 1
        basic.showNumber(unus)
    }
    if (_switch == 1) {
        duo += 1
        basic.showNumber(duo)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    basic.showNumber(unus + duo)
})
let _switch = 0
let duo = 0
let unus = 0
unus = 0
duo = 0
_switch = 0
