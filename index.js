const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/usuario", (request, response) => {
	const usuario = {
		nombre: "Crater",
		id: "35629482554616"
	};
	response.json(usuario);
});

app.post("/agregar", (request, response) => {
	const usuario = request.body;
	usuario.nombre = `${usuario.nombre} nuevo`;
	usuario.id = "3596289118869";
	response.json(usuario);
});

let puerto = 3000;
app.listen(puerto, () => {
	console.log(`Estoy conectado en el puerto ${puerto}`);

});
