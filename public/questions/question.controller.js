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
                .then(function(response) {
                    vm.allQuestions = response.data;
                    console.log(vm.allQuestions);

                });

            $http.get('/final_question')
                .then(function(response) {
                    vm.finalQuestion = response.data;
                    console.log(vm.finalQuestion);

                });

        }; //end of oninit function


        vm.questionToggle = function() {
            vm.counter = 0;
        };

        vm.questionSubmit =function(question){
          vm.counter++;

          console.log(vm.questionAnswer, question.answer1);
        };
        vm.finalSubmit = function(){
            console.log(vm.finalAnswer, vm.finalQuestion[0].answer1);
        };




    } //end QuestionController

})();
