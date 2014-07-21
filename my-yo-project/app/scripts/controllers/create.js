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


        var message={'name':$scope.change,'status':"false"}
        var messages = JSON.parse(localStorage.getItem('messages')) || []
        console.log(message)

       $scope.update=function() {
           message.name= document.getElementById("input").value
           if(message.name==""||message.name==" "){
               document.getElementById("warning").innerHTML =""
               document.getElementById("activity").disabled = true
           }
           else {
               for (var i=0; i < messages.length; i++) {
                   if (message.name == messages[i].name||message.name==messages[i].name.concat(" ")) {
                       document.getElementById("warning").innerHTML = "*活动名称重复！"
                       document.getElementById("activity").disabled = true
                       break
                   }
                   continue
               }
               if (i == messages.length) {
                   document.getElementById("activity").style.background = "#fafafa"
                   document.getElementById("activity").disabled = false
                   document.getElementById("warning").innerHTML = ""
                   $scope.go_add = function () {
                       messages.unshift(message)
                       localStorage.setItem("messages", JSON.stringify(messages))
                       localStorage.activityname=messages[0].name
                       $location.path('/add')
                   }
               }
           }

       }


        if(messages.length==0) {
            document.getElementById('back').style.display = 'none'//隐藏 block显示
        }

        $scope.go_list=function() {
            $location.path('/list')
        }



    });




