function euclideanDistance(x1, y1, x2, y2) {
    var xDiff  = x1 - x2;
    var yDiff = y1 - y2;

    return Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
}

function manhattanDistance(x1, y1, x2, y2) {
    var xDiff = Math.abs(x1 - x2);
    var yDiff = Math.abs(y1 - y2);

    return xDiff + yDiff;
}

function orthogonalDistance(x1, y1, x2, y2, f) {
    var xDiff = Math.abs(x1 - x2);
    var yDiff = Math.abs(y1 - y2);

    if(yDiff > xDiff) {
        return (0.41 * xDiff) + (0.941246 * yDiff);
    } else {
        return f(x1, y1, x2, y2);
    }
}

function otherDistance(x1, y1, x2, y2) {
    var xDiff = Math.abs(x1 - x2);
    var yDiff = Math.abs(y1 - y2);

    return (xDiff * xDiff) + (yDiff * yDiff);

}

function chebyshevDistance(x1, y1, x2, y2) {
    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
}

function orthEuclidean(x1, y1, x2, y2) {
    return orthogonalDistance(x1, y1, x2, y2, euclideanDistance);
}

function orthManhattan(x1, y1, x2, y2) {
    return orthogonalDistance(x1, y1, x2, y2, manhattanDistance);
}

function orthOther(x1, y1, x2, y2) {
    return orthogonalDistance(x1, y1, x2, y2, otherDistance);
}

function orthChebyshev(x1, y1, x2, y2) {
    return orthogonalDistance(x1, y1, x2, y2, chebyshevDistance);
}
