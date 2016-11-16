(function(){
    'use strict'

    angular.module('test.mock.service', [])
    .factory('MockService', mockService);

    function mockService() {
        return {
            countries: countries
        }
    }

    function countries() {
        return {
            AR: 'Argentina',
            BR: 'Brasil',
            CL: 'Chile',
            CO: 'Colômbia',
            CR: 'Costa Rica',
            CU: 'Cuba',
            DO: 'República Dominicana',
            EC: 'Equador',
            FR: 'França',
            GF: 'Guiana Francesa',
            GT: 'Guatemala',
            HN: 'Honduras',
            HT: 'Haiti',
            IT: 'Itália',
            JM: 'Jamaica',
            MX: 'México',
            NI: 'Nicarágua',
            PA: 'Panamá',
            PE: 'Peru',
            PR: 'Porto Rico',
            PY: 'Paraguai',
            SV: 'El Salvador',
            US: 'Estados Unidos',
            UY: 'Uruguai',
            VE: 'Venezuela'
        }
    }

}());