/* global angular */
var home = {
    template: `
        <div class="home">Home</div>    
    `
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider) {
        
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
    });