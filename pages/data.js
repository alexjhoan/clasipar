import React from 'react'
// import mysql from 'mysql'

function data() {

	// const connection = mysql.createConnection({
	//   host: "localhost",
	//   port: 3306,
	//   user: "root",
	//   password: "toor",
	//   database : 'clasipar'
	// });

	// React.useEffect(() => {
	// 	return () => {
	// 		connection.connect(function(error){    
 //        try{ 
 //           //si error es true mandamos el mesaje de error
 //           if(error){ 
 //               console.log("Error al establecer la conexión a la BD -- " + error);
 //           //conexión exitosa, en este punto ya hemos establecido la conexión a base de datos
 //           }else{  
 //               console.log("Conexión exitosa"); 
 //                //Aquí debes escribir el código que necesites, un INSERT, SELECT etc.
 //           }
 //         }
 //         catch(x){ 
 //             console.log("Contacto.agregarUsuario.connect --Error-- " + x); 
 //         } 
	// 		});
	// 	};
	// }, [])

	return (
		<div>
			<h1>pagina de data</h1>
		</div>
	)
}

export default data