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
          console.log("onInit ALL ng-ifs are yes for testing purposes");
          vm.questionToggleFlag = true;
          vm.finalQuestionToggleFlag = true;

        }; //end of oninit function

        vm.questionToggle = function(){
          vm.counter = 0; 
        }





     } //end QuestionController

})();
