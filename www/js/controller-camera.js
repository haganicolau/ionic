angular.module('starter')
        .controller('CameraCtrl',
                function ($scope, $cordovaCamera) {
                    $scope.pictureUrl = 'http://placehold.it/300x300';

                    $scope.takePhoto = function () {
                        var options = {
                            destinationType: Camera.DestinationType.DATA_URL,
                            encodingType: Camera.DestinationType.JPEG
                        };

                        $cordovaCamera.getPicture(options)
                                .then(function (data) {
                                    $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
                                }, function (error) {
                                    console.log('erro: ' + error);
                                });
                    };
                });