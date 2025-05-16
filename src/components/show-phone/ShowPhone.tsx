import React, { useState } from "react";

export const ShowPhone = () => {
  const telefono = 2132167885;
  const [showPhone, setShowPhone] = useState(false);
  const email = "cualquiera@gmail.com";
  return (
    <div>
      {showPhone && (
        <div>
          <h1>Telefono: {telefono}</h1>
          <h1>email: {email}</h1>
        </div>
      )}

      <button onClick={() => setShowPhone(!showPhone)}>
        Mostrar / Ocultar
      </button>
    </div>
  );
};
