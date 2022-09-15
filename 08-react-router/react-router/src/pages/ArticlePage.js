import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const [locations, setLocations] = useState(null);
  useEffect(() => {
    let mounted = true;
    console.log('Montando ArticlePage')
    fetch("https://rickandmortyapi.com/api/location")
      .then((result) => result.json())
      .then((data) => {
        console.log('El fetch terminó')
        if(mounted){
          console.log('ejecutando setLocations')
          setLocations(data.results)
        }
      });
    return () => {
      console.log('Desmontando ArticlePage')
      mounted = false
    }
  }, []);

  if (!locations) return <div>Cargando...</div>;
  return (
    <>
      <div>Locations:</div>
      <div>
        {locations.map((location) => {
          return (
            <div key={location.id}>
              <Link to={`/articles/${location.id}`}>
                {location.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArticlePage;
