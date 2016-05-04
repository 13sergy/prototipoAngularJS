'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    
        $scope.setInterval=5000;
    
        $scope.titulo = "ST&B Inicio";
    
        $scope.slides = [
            {
                title:'Seguridad Informática',
                image:'../../images/a.jpg',
                text:'Protege tu empresa',
                alt:'informatica'
            },
            {
                title:'Seriedad',
                image:'../../images/b.jpg',
                text:'Sencillez, calidad, rapidez, disponibilidad, seguridad, efectividad, confidencialidad... ',
                alt:'informatica'
            },
            {
                title:'Actualiza tu empresa',
                image:'../../images/c.jpg',
                text:'No tengas software desactualizado potencialmente inseguro',
                alt:'informatica'
            }
        ];
    
        var baseURL='http://lorempixel.com/400/400/';
        
        $scope.contenido=[
            {
                img:baseURL+'people',
                title:'Sobre Nosotros',
                sumario:'Somos una empresa comprometida con nuestros clientes.',
                alt:'Sobre Nosotros'
            },
            {
                img:baseURL+'business',
                title:'Nuestros Servicios',
                sumario:'Ofrecemos asesoría profesional y un montón de servicios para tu empresa.',
                alt:'Nuestros Servicios'
            },
            {

                img:baseURL+'transport',
                title:'Contáctanos',
                sumario:'Solicítanos presupuesto sin compromiso.',
                alt:'Contáctanos'
            }
        ];    
  });
