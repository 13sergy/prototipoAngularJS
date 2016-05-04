'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ServiciosCtrl
 * @description
 * # ServiciosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ServiciosCtrl', function ($scope) {
    
    $scope.titulo = "ST&B Servicios";
    
    $scope.posts = [
        {
        title:"Reparación de equipos",
        content:"Servicio tanto para empresas como para particulares."
        },
        {
        title:"Mantenimiento a empresas",
        content:"Asistencia informática para empresas y profesionales."
        },
        {
        title:"Diseño de Páginas web",
        content:"Diseñamos e implementamos páginas web económicas para empresas y particulares."
        },
        {
        title:"Diseño de Tiendas online",
        content:"Diseño y creación de tiendas online funcionales para empresas y particulares."
        },
        {
        title:"Diseño de APP´s",
        content:"Diseñamos y desarrollamos aplicaciones en las plataformas mayoritarias del mercado."
        },
        {
        title:"Dominios y alojamiento web",
        content:"Dominios .com, .es, .org, .net, .info,... y alojamiento web con cuentas de correo."
        },
        {
        title:"Tratamiento de Redes / Servidores",
        content:"Redes LAN , WIFI, VPN, ..."
        },
        {
        title:"Venta de Hardware",
        content:"Equipos informáticos y toda clase de tecnología para usted o su negocio."
        },
        {
        title:"Software",
        content:"Software de gestión, ERP, CRM, TPV, hosteleria, contabilidad, facturación,..."
        },
        {
        title:"Consultoría informática",
        content:"Para la gestión, instalación y administración de sistemas informáticos."
        },
        {
        title:"Asesoramiento informático",
        content:"Le asesoramos para cualquier cambio informático que desee hacer en sus instalaciones."
        },
        {
        title:"Community Manager",
        content:"Nos encargamos de que su empresa esté muy presente en Internet. Administración de redes sociales, marketing 2.0,               Estrategia online, etc..."
        }
        
       ];
  });
