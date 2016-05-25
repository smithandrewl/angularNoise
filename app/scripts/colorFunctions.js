function linearColor(value) {
    return [value, value, value, 255];
}

function xorColor(value) {
    return [value ^ 64, value ^ 32, value ^ 16, 255];
}

function modColor(value) {
    return [value % 70, value % 8, value % 255, 255];
}

function andColor(value) {
    return [value & 3, value  & 80, value & 150, 255];
}

function sinColor(value) {
    return [Math.sin(value * .05) * 100, Math.sin(value * .05) * 100, Math.sin(value * .05) * 100, 255];
}

function tanColor(value) {
    return [Math.tan(value * .07) * 100, Math.tan(value * .07) * 100, Math.tan(value * .07) * 100, 255];
}

