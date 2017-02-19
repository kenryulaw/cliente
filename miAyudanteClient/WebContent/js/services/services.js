//Servicios de la aplicacion
referenciaApp.service("getProperties", function($http){
	
	this.getAllProperties = function(){
		$http.get('config/miAyudante-config.properties')
			.then(
				function (respuesta) {
					console.log(respuesta);
				});
	};
	
	this.textosSpanish = {
		inicioSesion : "Inicio de Sesi\u00f3n",
		usuario : "Usuario",
		usuarioError : "Por favor, escriba un usuario v\u00e1lido",
		clave : "Clave",
		claveError : "Por favor, escriba una clave v\u00e1lida",
		enviar : "Enviar"
	};
})