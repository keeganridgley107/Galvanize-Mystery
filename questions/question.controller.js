"use strict";
(function() {
    angular.module("app")
        .component('questions', {
            controller: questionCtrl,
            templateUrl: 'questions/question.template.html'
        });
    questionCtrl.$inject = ['$http'];

    function questionCtrl($http) {
        const vm = this;


        vm.$onInit = function() {
          $http.get('/classifieds')
          .then(function(response)
          {
          vm.allPosts = response.data;
          console.log(vm.allPosts);
        });
        }; //end of oninit function

        vm.postFormToggle = function(){
          console.log("getting to postFormToggle");
          if (vm.postFlag) {
            vm.postFlag = false;
          }else{
            vm.postFlag = true;
          }
        } // end of postFormToggle

        vm.postClassified = function() {

          console.log("submiting a new post");
          console.log(vm.classified)
          $http.post('/classifieds', vm.classified )
          .then(function(response){
            //console.log(response.data);
            vm.classified.title = "";
            vm.classified.description = "";
            vm.classified.price = "";
            vm.classified.item_image = "";
          });
          $http.get('/classifieds')
          .then(function(response)
          {
          vm.allPosts = response.data;
          console.log(vm.allPosts);
        });
        }; //end post submit function

        vm.deletePost = function(post){
          vm.id = post.id;
          console.log(vm.id);
          $http.delete(`/classifieds/${vm.id}`)
          .then(function(response){
            console.log(response.data);
            //vm.allClassifieds = response.data;
            $http.get('/classifieds')
            .then(function(response)
            {
            vm.allPosts = response.data;
            console.log(vm.allPosts);
          });
          });
        }; //end of delete function
    }

})();
