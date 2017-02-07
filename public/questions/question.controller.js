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
        //this function keeps track of the answers the user gets right

        vm.questionSubmit =function(question){
          vm.counter++;

          console.log(vm.questionAnswer, question.answer1);
        };
        //this function is used to submit all the main questions and compare user answer to determine if they are correct or not then it empties the form and responds to the user

        vm.finalSubmit = function(){
            console.log(vm.finalAnswer, vm.finalQuestion[0].answer1);
        };
        //this function is used to submit the final user answer and determine if they have the right one(s) out of the three possible if  it is the function calls the handshakeToggle function

        vm.handshakeFunction = function(){
          console.log(vm.handshake.phone);
        };
        //this function will fire a SMS to the number provided with a set msg payload if it is actually a series of numbers (check for chars other than 0-9 and handle kebab-case)


    } //end QuestionController

})();
