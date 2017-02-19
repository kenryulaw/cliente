referenciaApp.controller("login_controller", ["$scope", "$http", "getProperties", "$resource", function(s,h,getProperties,r){
	
	s.userName = "";
	s.userPassword = "";
	s.regexUserName = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+([a-zA-Z0-9]{1})$/;
	s.regexUserPassword = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9!$&?._]+([a-zA-Z0-9]{1})$/;
	s.textosSpanish = getProperties.textosSpanish;
	s.inicioSesion = s.textosSpanish.inicioSesion;
	s.usuario = s.textosSpanish.usuario;
	s.usuarioError = s.textosSpanish.usuarioError;
	s.clave = s.textosSpanish.clave;
	s.claveError = s.textosSpanish.claveError;
	s.enviar = s.textosSpanish.enviar;
	
	s.doLogin = function(){
		
	}
	
}]);
