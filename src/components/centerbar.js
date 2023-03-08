import { useState } from "react";

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
            
            <div className="timeline">
                {/* PANEL */}
                if (pagUno) {
                    <p>Uno</p>
                }else{
                    <p>Dos</p>
                }
            </div>

        </div>


    );
}

