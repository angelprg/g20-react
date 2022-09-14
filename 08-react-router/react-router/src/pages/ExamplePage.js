import React, { useEffect, useState } from "react";

const ExamplePage = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    setValue({
      user: {
        name: "Angel",
      },
    });
  }, []);

  // if(!value) return <div>Cargando...</div>
  // return <div>{value && value.user && value.user.name}</div>;
  return <div>{value?.user?.name}</div>;
};

export default ExamplePage;
