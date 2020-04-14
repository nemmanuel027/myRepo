var app = angular.module("myrepo", []);
app.controller("mysnippetsCtrl", function ($scope, $http, $window) {

    $scope.selectedVar = {};

    $scope.select = function(item)
    {
        $scope.selectedVar = item;
        $scope.displayItem = 'yes';
    }

    $scope.back = function()
    {
        window.location= "mysnippets";
    }

    $scope.powerOff = function () {
        sessionStorage.clear();
        window.location = "login";
    }

    var identifier = sessionStorage.getItem("identifier");
    $scope.repoRealData = [];
    $scope.isEmpty = 'yes';

    $http({
        method: 'GET',
        url: '/myrepo/myRepoReal',
        'Content-Type': 'application/json'
    }).then(function successCallback(response) {
        $scope.repoData = response.data;
        for(var i=0;i<$scope.repoData.length;i++)
        {
            if($scope.repoData[i].identifier == identifier)
            {
                $scope.repoRealData.push($scope.repoData[i]);
                $scope.isEmpty = 'no';
            }
        }
    },
        function errorCallback(response) {
        });



});