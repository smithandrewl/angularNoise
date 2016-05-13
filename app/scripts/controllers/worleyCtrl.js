var myApp = angular.module('myApp').controller('worleyCtrl', ['$scope', function($scope) {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    $scope.generator = {
        height: 1137,
        width : 768,
        points : 6,
        euclideanDistance : true,
        manhattenDistance : false,
        orthEuclideanDistance : false,
        orthManhattenDistance : false,
        linearColor : true,
        xorColor : false,
        andColor : false,
        nextImage: function() {
            this.draw();
        },
        draw: function() {}
    };


}]);