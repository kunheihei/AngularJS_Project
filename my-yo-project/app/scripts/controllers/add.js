/**
 * Created by jiankun on 14-7-14.
 */
'use strict';

angular.module('myYoProjectApp')
    .controller('AddCtrl',function($scope,$location){
        $scope.awesomeThings=[
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.number=0
        $scope.login="true"


        var list2 = JSON.parse(localStorage.getItem('messages'))||[]
        var select = localStorage.getItem("activityname")
        var i= 0,x=0
        var status={"login":"login"}


        for(;x<list2.length;x++){
            if(list2[x].status=="true") break
        }


        for(;i<list2.length;i++) {
            if (select == list2[i].name) break
        }

        if(x<list2.length) $scope.startend=true
        if(list2[i].status=="true") $scope.login = "false"

        $scope.go_end=function() {

            $scope.login = "false"   //结束 按钮
            list2[i].status="true"
            localStorage.setItem("messages",JSON.stringify(list2))

        }
        $scope.go_start=function(){
            if(confirm("确定要结束本次活动("+select+"*)报名吗？！")){
                $scope.login="true"
                list2[i].status = "false"
                localStorage.setItem("messages",JSON.stringify(list2))


            }
        }


        $scope.go_list = function() {
            $location.path('/list')
        }

    });