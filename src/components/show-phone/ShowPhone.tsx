
import React, { useState } from 'react'

export const ShowPhone = () => {
    const telefono = 2132167885;
    const [showPhone, setShowPhone] = useState(false)
    return (
        <div>

            {
                showPhone && <h1>Telefono: {telefono}</h1>
            }

            <button onClick={() => setShowPhone(!showPhone)} >
                Mostrar / Ocultar
            </button>

        </div>
    )
}
