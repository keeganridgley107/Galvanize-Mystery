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
          vm.loginFlag = false;
          vm.adminFlag = false;

          if(localStorage.getItem("isWin") === null){

          }else{
            vm.loginFlag = true;
          }

        }
        vm.userLoginVerify = function(){

          vm.name = vm.userLogin.name;

          $http.get(`/users/${vm.name}`)
              .then(function(response) {
                  vm.userData = response.data;

                  if (vm.userLogin.password === vm.userData.password) {

                    //redirect goes here

                    window.location.assign("http://one-question.surge.sh/")
                    localStorage.setItem("loginUsr",vm.name);
                  }else{

                    //failure modal goes here
                    $('#myModal4').modal({
                      keyboard: true
                    })
                    vm.userLogin.name = "";
                    vm.userLogin.password = "";
                  }
              });


        } // end of login verify function



          if (vm.userLogin !== undefined && vm.userLogin.name.length > 2) {

          }


        vm.loginFlagToggle = function(){
          if (vm.loginFlag) {
            vm.loginFlag = false;

          }else{
            vm.loginFlag = true;

          }


        }//end of loginFlagToggle function
      }
})();
