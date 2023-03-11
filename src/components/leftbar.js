import { FaHome, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaListUl, FaRegUser, FaEllipsisH, FaTwitter } from "react-icons/fa";
import Rostro from "./rostro"
import foto from "../images/foto1.jpg";
import {BotonTwittearBig} from "./botontwittear";

function Tile(params) {
    return <button className="tile">
        <params.kind className="icono-tile" />
        <p>{params.text}</p>
    </button>
}


function Profile(params) {
    return <button className="perfil">
        <Rostro foto={foto} />
        <div className="datos-perfil">
            <p>Germani</p>
            <p className="subtitulo">@germani</p>
        </div>
    </button>
}

export function LeftBar(params) {
    return <div className="leftbar">
        <Tile kind={FaTwitter}/>
        <Tile kind={FaHome} text="Home" />
        <Tile kind={FaHashtag} text="Explorar" />
        <Tile kind={FaRegBell} text="Notificaciones" />
        <Tile kind={FaRegEnvelope} text="Mensajes" />
        <Tile kind={FaRegBookmark} text="Guardados" />
        <Tile kind={FaListUl} text="Listas" />
        <Tile kind={FaRegUser} text="Perfil" />
        <Tile kind={FaEllipsisH} text="Mas opciones" />
        <div className="btn-left">
            <BotonTwittearBig className="btn-left" />
        </div>
        <Profile />
    </div>
}