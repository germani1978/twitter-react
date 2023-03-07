import { FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaListUl, FaRegUser, FaEllipsisH } from "react-icons/fa";

import foto from "../images/foto.jpg";

function Tile(params) {
    return <button className="tile">
        <params.kind className="icono-tile" />
        <p>{params.text}</p>
    </button>
}

function BotonTwittear(params) {
    return <button className="boton-twittear">Twittear</button>
}

function Profile(params) {
    return <button className="perfil">
        <img className="foto-perfil" alt="Mi-imagen" src={foto} />
        <div className="datos-perfil">
            <p>Germani</p>
            <p className="subtitulo">@germani</p>
        </div>
    </button>
}

export function LeftBar(params) {
    return <ul>
        <Tile kind={FaHome} text="Home" />
        <Tile kind={FaHashtag} text="Explorar" />
        <Tile kind={FaRegBell} text="Notificaciones" />
        <Tile kind={FaRegEnvelope} text="Mensajes" />
        <Tile kind={FaRegBookmark} text="Guardados" />
        <Tile kind={FaListUl} text="Listas" />
        <Tile kind={FaRegUser} text="Perfil" />
        <Tile kind={FaEllipsisH} text="Mas opciones" />
        <BotonTwittear />
        <Profile />
    </ul>
}