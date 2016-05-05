'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
    .controller('ContactoCtrl', function ($scope) {

        $scope.usuario = {};

        $scope.titulo = "ST&B Contacto";

        $scope.reset = function() {
            $scope.usuario.name="";
            $scope.usuario.email="";
            $scope.usuario.phone="";
            $scope.usuario.message="";
            $scope.usuario.check="";
            $scope.userForm.$setPristine();
        };

        $scope.user = [
            {
                name: {
                             required: true,
                             minlength: 5,
                             maxlength: 50
                }
            }
        ];

        //Funcion que lanza una ventana modal de informacion al usuario cuando clika el boton de enviar formulario y es valido.
        $scope.submitForm = function() {
            if ($scope.userForm.$valid) {
                $("#myModal").modal({backdrop: false});
            }
        };

        //Funcion que reedireciona al inicio.
        $scope.goHome = function() {
            window.location.href = "/";
        };

    });
