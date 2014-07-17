/**
 * Created by jiankun on 14-7-14.
 */
'use strict';

angular.module('myYoProjectApp')
    .controller('CreateCtrl',function($scope, $location){
        $scope.awesomeThings=[
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.back="返回"
        $scope.create="创建活动"


        var message={'name':$scope.change}
        var messages = JSON.parse(localStorage.getItem('messages')) || []
        console.log(message)

       $scope.update=function() {
           message = document.getElementById("input").value
           var i = 0
           if(message!=" " && message != "") {
               for (; i < messages.length; i++) {
                   if (message==messages[i] ) {
                       document.getElementById("warning").innerHTML = "*活动名称重复！"
                       document.getElementById("activity").disabled=true
                       break
                   }
                   continue
               }
               if (i == messages.length) {
                   document.getElementById("warning").innerHTML =""
                   document.getElementById("activity").disabled=false
                   $scope.go_add = function () {
                       messages.unshift(message)
                       localStorage.setItem("messages", JSON.stringify(messages))
                       $location.path('/add')
                   }
               }

           }

       }


        if(messages.length==0) {
            document.getElementById('cback').style.display = 'none'//隐藏 block显示
        }

        $scope.go_list=function() {
            $location.path('/list')
        }



    });




