'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:LocalizacionCtrl
 * @description
 * # LocalizacionCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
    .controller('LocalizacionCtrl', function ($scope, $http) {
        
        $scope.titulo = "ST&B Localizacion";/*Titulo de la pagina, pestaña*/
    
        $scope.titlePage = "El tiempo por OpenWeather"/*Contenido del h3 en el body*/
    
        var API_KEY='1abe9b17c7684522a85b702a76f46014';
    
        $scope.mostrar = function() {
            $scope.ocultarDiv.show = true;
        };

        $scope.cities = [
            
            {
                name : 'Brussels',
                countryCode : 'BE'
            },
            {
                name : 'New York City',
                countryCode : 'US'
            },
            {
                name : 'Chicago',
                countryCode : 'US'
            },
            {
                name : 'Los Angeles',
                countryCode : 'US'
            },
            {
                name : 'London',
                countryCode : 'GB'
            },
            {
                name : 'Paris',
                countryCode : 'FR'
            },
            {
                name : 'Frankfurt',
                countryCode : 'DE'
            },
            {
                name : 'Milan',
                countryCode : 'IT'
            },
            {
                name : 'Tokyo ',
                countryCode : 'JP'
            },
            {
                name : 'Hong Kong',
                countryCode : 'HK'
            },
            {
                name : 'Singapur',
                countryCode : 'IN'
            },
            {
                name : 'San Francisco',
                countryCode : 'US'
            },
            {
                name : 'Toronto',
                countryCode : 'CA'
            },
            {
                name : 'Mexico City',
                countryCode : 'MX'
            },
            {
                name : 'Sao Paulo',
                countryCode : 'BR'
            },
            {
                name : 'Madrid',
                countryCode : 'ES'
            },
            {
                name : 'Zurich',
                countryCode : 'CH'
            },
            {
                name : 'Moscow',
                countryCode : 'RS'
            },
            {
                name : 'Seoul',
                countryCode : 'KR'
            },
            {
                name : 'Sidney',
                countryCode : 'AU'
            }
        ];
    
        $scope.ciudad_seleccionada = $scope.cities[0];
        
        $scope.loadWeather = function(){
//            $scope.mostrar();
            console.log("Seleccionado "+$scope.ciudad_seleccionada);

            var URL='http://api.openweathermap.org/data/2.5/weather?q='+$scope.ciudad_seleccionada.name+'&lang=es&units=metric&appid='+API_KEY;
        
            //Funcion que hace la peticion de datos a la pagina de OPENWEATHER
            $http.get(URL).success(function(datos){
//                console.log("JSON: "+datos);
                $scope.ciudad=datos.name;
//                console.log($scope.ciudad);
                $scope.datos = datos;   
            });
        }
        $scope.loadWeather();
        
    })//Fin del controller.

    //filtro para poner la primera letra en mayúscula
    .filter("capitalizeFirst", function(){
        return function(text) {
            if(text != null){
                return text.substring(0,1).toUpperCase()+text.substring(1);
            }
        }
    });//fin del filtro y del module.