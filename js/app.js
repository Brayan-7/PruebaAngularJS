angular.module('myapp',[])
.controller('miControlador',function($scope){
    $scope.items = [];
    $scope.new = {};
    $scope.crearItem = function(){
        $scope.items.push($scope.new);
        $scope.new = {};
    };
})