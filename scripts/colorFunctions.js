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
    let gammaAdj = 70;
    let redPart = 10.9;
    let greenPart = 5.9;
    let bluePart = 20.5

    return [(Math.sin(value * redPart) * 100) + gammaAdj, (Math.sin(value * greenPart) * 100) - gammaAdj, (Math.sin(value * bluePart) * 100) + gammaAdj, 255];
}

function tanColor(value) {
    return [Math.tan(value * 30.00) * 100, Math.tan(value * 25.0) * 100, Math.tan(value * 30.07) * 100, 255];
}

