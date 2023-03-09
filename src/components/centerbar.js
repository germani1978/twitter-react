import { useState } from "react";
import { ParaTi } from "./parati";
import { Siguiendo } from "./siguiendo";

export function CenterBar(params) {

    const [pagUno, setPage] = useState(true)

    const onClickUno = () => setPage(true)
    const onClickDos = () => setPage(false)

    return (
        <div className="center">
            <p className="titulo">Inicio</p>
            {/* BOTONES SUPERIORES */}
            <div id="btn-top">
                <button className="btn-center" type="text" onClick={onClickUno}>Para ti</button>
                <button className="btn-center" onClick={onClickDos}>Siguiendo</button>
            </div>
            
            {/* PANEL */}
            <div className="timeline">
                {
                    pagUno 
                    ? <ParaTi/>
                    : <Siguiendo/>
                }
            </div>

        </div>


    );
}

