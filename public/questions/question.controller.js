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
          vm.questionToggleFlag = true;
          vm.finalQuestionToggleFlag = true;

          $http.get('/questions')
          .then(function(response)
          {
          vm.allQuestions = response.data;
          console.log(vm.allQuestions);

        });
        }; //end of oninit function


        vm.questionToggle = function(){
          vm.counter = 0;
        };

        



     } //end QuestionController

})();
