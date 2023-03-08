import { useState } from "react";
import { ParaTi } from "./parati";
import { Siguiendo } from "./siguiendo";

export function CenterBar(params) {

    const [pagUno, setPage] = useState(true)

    const onClickUno = () => setPage(true)
    const onClickDos = () => setPage(false)

    return (
        <div className="center">

            {/* BOTONES SUPERIORES */}
            <div className="btn-top">
                <button onClick={onClickUno}>Para ti</button>
                <button onClick={onClickDos}>Siguiendo</button>
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

