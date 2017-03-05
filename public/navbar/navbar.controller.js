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
          //console.log(vm.userLogin);
          vm.name = vm.userLogin.name;

          $http.get(`/users/${vm.name}`)
              .then(function(response) {
                  vm.userData = response.data;

                  if (vm.userLogin.password === vm.userData.password) {
                    // console.log(vm.userData);
                    //redirect goes here
                    //alert("confirmed user")
                    window.location.assign("http://one-question.surge.sh/")
                    localStorage.setItem("loginUsr",vm.name);
                  }else{

                    //failure alert goes here
                    alert("NICE TRY! You do not have access rights... yet.")
                  }
              });


        } // end of login verify function



          if (vm.userLogin !== undefined && vm.userLogin.name.length > 2) {
                console.log(vm.userLogin);
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
