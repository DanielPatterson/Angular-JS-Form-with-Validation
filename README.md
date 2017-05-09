# Angular-JS-Form-with-Validation
Angular JS Form with basic validation

#### CSS Dependencies:
- bootstrap.min.css

#### JS Dependencies:
- bootstrap.min.js
 - angular.min.js
 
#### Controller JS:
```` javscript
angular.module('formApp', []).controller('formCtrl', function ($scope) {    
	
    $scope.submit = function(form) {
    
      $scope.submitted = true;

      if (form.$invalid) {
        return;
      }

    };
});
````
