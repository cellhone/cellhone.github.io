angular.module('App')
.config(function($stateProvider) {
  $stateProvider.state('place', {
    url: '/places/:place_id',
    controller: 'PlaceController as vm',
    templateUrl: 'views/place/place.html',
    resolve: {
      Place: function($http, $stateParams) {
        var url = 'https://civinfo-apis.herokuapp.com/civic/place?place_id=' + $stateParams.place_id;
        return $http.get(url);
      }
    }
  });
})
.controller('PlaceController', function($scope, Place) {
  var vm = this;

  vm.place = Place.data.result;
});
