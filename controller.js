angular.module('formApp', []).controller('formCtrl', function ($scope) {    
	
    $scope.submit = function(form) {
    
      $scope.submitted = true;

      if (form.$invalid) {
        return;
      }

    };
});