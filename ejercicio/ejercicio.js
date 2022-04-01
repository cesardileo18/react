var boton = document.querySelector("#button");
boton.addEventListener('click', function(alerta){
    fetch(`https://jsonplaceholder.typicode.com/users`, {
		method: 'POST',
		headers: {
			'X-Qlik-Xrfkey': "iX83QmNlvu87yyAB",
			'X-Qlik-User': "UserDirectory=dataiq; UserId=user",
			'Xrfkey': "iX83QmNlvu87yyAB"
			}					
			})
                        console.log(alerta);
});