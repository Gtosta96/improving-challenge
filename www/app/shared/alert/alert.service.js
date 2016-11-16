(function() {
	'use strict'

	angular.module('test.alert.service', ['angularModalService'])
	.factory('AlertService', alertService);

	alertService.$inject = ['ModalService', 'ShareService'];
	function alertService(ModalService, ShareService) {
		return {
			httpError: httpError
		};

		function httpError(xhr) {

			var httpErrorMessage;
			switch(xhr.status) {
				default:
				httpErrorMessage = 'Tente novamente mais tarde.'
				break;
				
				case 400:
				httpErrorMessage = 'CEP inconsistente com o endereço.'
				break;
				
				case 409:
				httpErrorMessage = 'O e-mail utilizado já está sendo utilizado.'
				break;

				case 500:
				httpErrorMessage = 'Houve um problema de comunicação com o servidor. Tente mais tarde.'
				break;
			}

			ShareService.set('httpErrorMessage', httpErrorMessage);

				var properties = {
					templateUrl: 'app/shared/alert/alert.view.html',
					controller: 'AlertErrorController',
					controllerAs: 'vm'
				}

				ModalService.showModal(properties);
			}
		}

})();