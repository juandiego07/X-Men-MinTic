import React, { useEffect, useState } from "react";
// import * as $ from "jquery";
import Axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Personajes = () => {
  const pathUrl = "https://xmenapiheroku.herokuapp.com/api/characters";
  // const userConfig = {
  //   id: "123456789",
  //   nombre: "Juan",
  //   email: "juandiego07@gmail.com",
  //   role: "admin",
  // };

  const [ListaPersonajes, setListaPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

  // --------------------- Petición con XML Http Request ----------------------------------------------
  //   const cargarPersonajes = () => {
  //     // 1.- Se crea una instancia del metodo XHR el cual permite hacer las peticiones
  //     const xhr = new XMLHttpRequest();
  //     // 2.- Se prepara la petición GET o POST al recurso seleccionado a traves de una URL
  //     xhr.open("get", pathUrl);
  //     // 3.- Se ejecuta la petición antes preparada
  //     xhr.send();
  //     // 4.- Se crea funcion listenner que escucha los cambios den la petición XML HTTP REQUEST
  //     xhr.onreadystatechange = () => {
  //       // 5.- Se valida con condicionales el estado 4 de petición usando la propiedad "readyState"
  //       if (xhr.readyState === 4) {
  //         // 6.- Se extra del objeto los datos en formato String desde la propiedad "responseText", para tratar los datos como un Arry se utilizada la función de JS JSON.parse la cual transforma el objeto en un arreglo
  //         const response = JSON.parse(xhr.responseText);
  //         // 7.- Se modifica el estado del componente a traves de la función "setListaPersonajes" pasando como parametro el arreglo de personajes
  //         setListaPersonajes(response.results);
  //       }
  //     };
  //   };

  // --------------------- Petición con JQUERY ----------------------------------------------
  //   const cargarPersonajes = () => {
  //     // 1.- Se realiza petición a traves de la libreria de JQUERY usando el simbolo "$", para dicha petición se usa el metodo GET y el metodo recibe la URL de consulta y callback el cual retorna los resultados de la consulta.
  //     $.get(pathUrl, (response) => {
  //       // 2.- Se modifica el estado del componente a traves de la función "setListaPersonajes" pasando como parametro el arreglo de personajes
  //       setListaPersonajes(response.results);
  //     });
  //   };
  // --------------------- Petición con Axios a traves de promise ----------------------------------------------
  //   const cargarPersonajes = () => {
  //     // 1.- Se realiza petición a traves de la libreria de Axios, para dicha petición se usa el metodo GET y el metodo recibe la URL de consulta, este retona una promesa la cual se recibe a traves de promise
  //     Axios.get(pathUrl)
  //     // 2.- Se recibe la promesa en la variable response y se usan las propiedades "data" y "results" para asignarle un arreglo de personajes al estado del componente.
  //       .then((response) => setListaPersonajes(response.data.results))
  //       // 3.- Se capturan los errores de las promesas
  //       .catch((error) => console.log(error));
  //   };
  // --------------------- Petición con Axios a traves de Async Await ----------------------------------------------
  const cargarPersonajes = async () => {
    // 1.- A través de una función Azincrona se declara la variable "response" la cual recibe la promesa que retorna la petición
    try {
      setLoading(true);
      const response = await Axios.get(pathUrl);
      setListaPersonajes(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Guardar informacion en localStorage, permite que la información persista hasta cerrar el navegador.
  // localStorage.setItem('userData', JSON.stringify(userConfig))

  // Al recuperar informacion del localStorage, se recupera en formato String y debe de ser transformada con la función JSON.parse
  // const responseLocalStorage = localStorage.getItem("userData");
  // console.log(JSON.parse(responseLocalStorage));

  // Guardar informacion en localStorage, permite que la información persista hasta cerrar el navegador.
  // sessionStorage.setItem("userData", JSON.stringify(userConfig));

  // Al recuperar informacion del localStorage, se recupera en formato String y debe de ser transformada con la función JSON.parse
  // const responseSessionStorage = sessionStorage.getItem("userData");
  // console.log(JSON.parse(responseLocalStorage));

  useEffect(() => {
    cargarPersonajes();
  }, []);

  return loading ? (
    <Loading></Loading>
  ) : (
    <div>
      <h1>Lista de Personajes</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {ListaPersonajes?.map((personaje) => (
          <div className="col" key={personaje.id}>
            <div className="card">
              <img
                src={personaje.img}
                className="card-img-top"
                alt={personaje.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {personaje.name}
                  <small>{personaje.alias}</small>
                </h5>
                <p className="card-text">{personaje.description}</p>
                <Link
                  to={`/personajes/${personaje.id}`}
                  className="btn btn-outline-secondary"
                >
                  Ver mas....
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">{personaje.powers}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
