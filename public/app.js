// public/core.js
var helloTaskList = angular.module('helloTaskList', [])

    .controller('MainCtrl', function($scope, $http) {
      $scope.formData = {};
    }

    //When landing on a page, gets all the tasks and shows them
    $http.get('/api/tasks')
      .then(
        function(response) {
          //success callback
          $scope.tasks = response.data;
          console.log(response.data);
        },
        function(error) {
          //failure callback
          console.log('Error: ' + error);
        }
      );

//when submitting the add form, send the text to the node api

$scope.createTask = Function() {
  $http.post('./api/tasks', $scope.formData)
    .then(
      function(response) {
        $scope.formData = {}; //clears the form so user is ready to enter another
        $scope.tasks = response.data;
        console.log(reponse.data);
      },
      function(error) {
        console.log('Error: ' + error);
      }
    );
};

//deletes a task after marking it complete
$scope.deleteTask = function(id) {
  $http.delete('api/tasks/' + id)
  .then(
    function(response) {
      //success callback
      $scope.tasks = response.data;
      console.log(response.data);
    },
    function(error) {
      //failure callback
      console.log('Error: ' + error);
    }
  );
};
});
