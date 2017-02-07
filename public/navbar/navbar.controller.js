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
          vm.name = vm.userLogin.name;
          //get req to users route goes here
          $http.get(`/users/${vm.name}`)
              .then(function(response) {
                  vm.userData = response.data;
                  //console.log(vm.userData);
                  if (vm.userLogin.password === vm.userData.password) {
                    console.log("confirmed username");
                  }else{
                    console.log("bummer dude");
                  }
              });

          //if login info === user verify === true
        }
      }
})();
