"use strict";
(function() {
    angular.module("app")
        .component('navbar', {
            controller: navbarCtrl,
            templateUrl: '/navbar/navbar.template.html'
        });



    navbarCtrl.$inject = ['$http'];

    function navbarCtrl($http) {
        const vm = this;

        vm.$onInit = function() {

        }
        vm.userLoginVerify = function(){
          console.log(vm.userLogin);

          //get req to users route goes here
          $http.get('/users')
              .then(function(response) {
                  vm.allUsers = response.data;
                  console.log(vm.allUsers);
                  
              });
          //if login info === user verify === true
        }
      }
})();
