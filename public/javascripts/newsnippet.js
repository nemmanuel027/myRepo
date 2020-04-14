var app = angular.module("myrepo", []);
app.controller("newsnippetCtrl", function ($scope, $http, $window) {

    var identifier = sessionStorage.getItem("identifier");
    $scope.snippetTitle = "";
    $scope.snippetDesc = "";

    $scope.powerOff = function()
    {
        sessionStorage.clear();
        window.location="login";
    }
    
$scope.cardList = [0];
$scope.cardListAdd = function()
{
    $scope.cardList.push($scope.cardList.length)
}
$scope.fragment = [];



$scope.saveThis = function(){
    
    var xTempObj = {
        "identifier":identifier,
        "title":$scope.snippetTitle,
        "description":$scope.snippetDesc,
        "fragments":$scope.fragment
    }

    $http({
        method: 'GET',
        url: '/myrepo/myRepoReal',
        'Content-Type': 'application/json'
    }).then(function successCallback(response) {
        $scope.repoData = response.data;
        $scope.repoData.push(xTempObj);
        var parameter = angular.toJson($scope.repoData);
        $http({
            url: '/myrepo/myRepoReal',
            method: "POST",
            data: parameter,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {window.location="mysnippets"});
    },
        function errorCallback(response) {
        });
    
}

});