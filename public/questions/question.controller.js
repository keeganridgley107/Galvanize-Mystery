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

        vm.counter = 1;
        vm.qID = 1;
        vm.totalQuest = 0;
        vm.userANS = [];
        //above used in multiple functions

        vm.$onInit = function() {
            vm.questionToggleFlag = true;
            vm.finalQuestionToggleFlag = false;
            vm.smsFormToggleFlag = false;
            vm.beginToggle = false;

            console.log(localStorage.getItem('userAns'));
            if (localStorage.getItem('userAns') === undefined){
              console.log("user has not finshed mayday");
            }else{
              console.log("user has completed mayday");
              //window.location = "this is my secret site.com"
            }
            // check for localStorage if yes
            // user has already completed the mystery
            // redirect to secret_page

            $http.get('/questions')
                .then(function(response) {
                    vm.allQuestions = response.data;
                    //console.log(vm.allQuestions);
                    vm.totalQuest = response.data.length;
                    //console.log(vm.totalQuest);
                });

            $http.get('/final_question')
                .then(function(response) {
                    vm.finalQuestion = response.data;
                    //console.log(vm.finalQuestion);

                });
                //console.log(vm.qID);
        }; //end of oninit function


        vm.questionToggle = function() {
            vm.counter = 1;
        };
        //this function keeps track of the answers the user gets right

        vm.questionSubmit =function(question){
          //console.log(vm.questionAnswer, question);
          let tempANS = vm.questionAnswer;
          vm.qID = question.id;
          let isWin = false;

          if (tempANS === question.answer1 || tempANS === question.answer2 || tempANS === question.answer3) {
            isWin = true;
            //this means the user has correct answer
            vm.userANS.push(tempANS);
            vm.questionAnswer = '';
            vm.counter++;
            if (vm.counter === (vm.totalQuest + 1)) {
              vm.finalQuestionToggleFlag = true;
            }
          }else{
            //failure msg goes here (modal or whatev)
            alert("this is not a correct answer, plese try again");
            vm.questionAnswer = '';
          }
          //console.log(isWin);
          //console.log(vm.userANS);

        };
        //this function is used to submit all the main questions and compare user answer to determine if they are correct or not then it empties the form and responds to the user

        vm.finalSubmit = function(){
            //console.log(vm.finalAnswer, vm.finalQuestion[0].answer1);

            let tempANS = vm.finalAnswer;
            let isWin = false;

            if (tempANS === vm.finalQuestion[0].answer1 || tempANS === vm.finalQuestion[0].answer2 || tempANS === vm.finalQuestion[0].answer3) {
              isWin = true;
              vm.userANS.push(tempANS);
              vm.finalAnswer = '';
              vm.finalQuestionToggleFlag = false;
              //vm.smsFormToggleFlag = true;
              //not used in current code
              //todo: pivot feature using better api
              localStorage.setItem("userAns", vm.userANS);

              alert("f0110w");
              alert("th3");
              alert("40.0165447"); //gal-gps
              alert("#ffffff");
              alert("-105.28168599999998"); //gal-gps
              alert("r4bb1t");
              alert("0x27 DOT 0x57791DC7D24C COMMA NEG0x69 DOT 0x2E53AE0E3DB9 "); //8228-gps
            }
            console.log(isWin, localStorage.getItem("userAns"));
        };

        //this function is used to submit the final user answer and determine if they have the right one(s) out of the three possible if  it is the function calls the handshakeToggle function

        vm.handshakeFunction = function(){
          console.log(vm.handshake.phone);

        };
        //todo: PIVOT this using a working sms/email API

        //this function will fire a SMS to the number provided with a set msg payload if it is actually a series of numbers (check for chars other than 0-9 and handle kebab-case)


    } //end QuestionController

})();
