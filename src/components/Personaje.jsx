import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import Loading from "./Loading";

const Personaje = () => {
  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const pathUrl = "https://xmenapiheroku.herokuapp.com/api/characters";

  const cargarPersonajes = (idPersonaje) => {
    setLoading(true);
      $.get(`${pathUrl}/${idPersonaje}`, (response) => {
        setPersonaje(response);
        setLoading(false);
      });      
  };

  useEffect(() => {
    cargarPersonajes(id);
  }, [id]);

  return loading ? (
    <Loading></Loading>
  ) : (
    <div>
      <h1>{personaje?.name}</h1>
      <h3>{personaje?.affiliation}</h3>
      <small>{personaje?.created}</small>
      <hr />
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={personaje?.img}
              className="img-fluid rounded-start"
              alt={personaje?.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <small>{personaje?.alias}</small>
              </h5>
              <p className="card-text">{personaje?.description}</p>
              <p className="card-text">
                <small className="text-muted">{personaje?.powers}</small>
              </p>
              <Link to="/" className="btn btn-outline-secondary">
                Regresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
