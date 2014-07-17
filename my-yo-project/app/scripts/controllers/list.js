/**
 * Created by jiankun on 14-7-14.
 */
'use strict';

angular.module('myYoProjectApp')
    .controller('ListCtrl',function($scope, $location){
        $scope.awesomeThings=[
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.go_create = function() {
            $location.path('/create')
        }

        $scope.list1 = JSON.parse(localStorage.getItem('messages'))||[]


        if($scope.list1==""){
            $location.path('/create')
        }

    });