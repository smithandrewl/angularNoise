var myApp = angular.module('myApp').controller('worleyCtrl', ['$scope', function($scope) {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    $scope.generator = {
        refreshing: false,
        height: 1137,
        width : 768,
        points : 6,
        imageData: context.getImageData(0,0, canvas.width, canvas.height),
        distanceFunctionSel: "euclidean",
        colorFunctionSel: "linear",
        distanceFunction: euclideanDistance,
        colorFunction: linearColor,
        invert: false,
        nextImage: function() {
            switch (this.distanceFunctionSel) {
                case "euclidean":
                    this.distanceFunction = euclideanDistance;
                    break;
                case "manhattan":
                    this.distanceFunction = manhattanDistance;
                    break;
                case "orthEuclidean":
                    this.distanceFunction = orthEuclidean;
                    break;
                case "orthManhattan":
                    this.distanceFunction = orthManhattan;
                    break;
                case "other":
                    this.distanceFunction = otherDistance;
                    break;
                case "orthOther":
                    this.distanceFunction = orthOther;
                    break;
                case "orthChebyshev":
                    this.distanceFunction = orthChebyshev;
                    break;
                case "chebyshev":
                    this.distanceFunction = chebyshevDistance;
                    break;
            }

            switch(this.colorFunctionSel) {
                case "linear":
                    this.colorFunction = linearColor;
                    break;
                case "xor":
                    this.colorFunction = xorColor;
                    break;
                case "mod":
                    this.colorFunction = modColor;
                    break;
                case "and":
                    this.colorFunction = andColor;
                    break;
                case "sin":
                    this.colorFunction = sinColor;
                    break;
                case "tan":
                    this.colorFunction = tanColor;
                    break;

            }
            var points = [];

            for(var i = 0; i < this.points; i++) {

                var xVal = Math.random() * canvas.width  + 1;
                var yVal = Math.random() * canvas.height + 1;

                points.push({x: xVal, y: yVal});
            }

            var data = this.imageData.data;


            for(var y = 0; y < canvas.height; y++) {
                var inpos = y * canvas.width * 4; // *4 for 4 ints per pixel
                var outpos = inpos + (canvas.width ) * 4;
                for(var x = 0; x < canvas.width ; x++) {

                    var closest = this.closestPoint({x: x, y: y}, points);
                    var distance = this.distanceFunction(x, y, closest.x, closest.y);
                    var val = Math.min(255, distance);

                    if(this.invert) {
                        val = 255 - val;
                    }
                    var value =  this.colorFunction(val);


                    data[outpos++] = value[0];
                    data[outpos++] = value[1];
                    data[outpos++] = value[2];
                    data[outpos++] = value[3];
                }
            }

            this.draw();
        },
        draw: function() {
            context.putImageData(this.imageData, 0, 0);
        },
        closestPoint: function(point, points) {
            var min = 10000;
            var closest = null;
            for(var i = 0; i < points.length; i++) {
                var newDist = euclideanDistance(point.x, point.y, points[i].x, points[i].y);
                if( newDist< min) {
                    min = newDist;
                    closest = points[i];
                }
            }

            return closest;
        }
    };

    $scope.generator.nextImage();


}]);
