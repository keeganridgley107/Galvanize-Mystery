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
          
          //if login info === user verify === true
        }
      }
})();
