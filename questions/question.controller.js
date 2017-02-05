"use strict";
(function() {
    angular.module("app")
        .component('questions', {
            controller: questionCtrl,
            templateUrl: '/questions/question.template.html'
        });



    questionCtrl.$inject = ['$http'];

    function questionCtrl($http) {
        const vm = this;


        vm.$onInit = function() {

          console.log("onInit is running");

        }; //end of oninit function

     }

})();
