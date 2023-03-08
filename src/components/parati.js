import foto from '../images/foto2.jpg'
import foto1 from '../images/foto3.jpg'

import Rostro from './rostro.js'

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BotonTwittear from './botontwittear';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import IosShareIcon from '@mui/icons-material/IosShare';

function PanelEscribir(params) {
    return <div className='panel-escribir'>
        <div className='input-panel-escribir'>
            <Rostro foto={foto} />
            <input type="text" placeholder='Que esta pasando' />
        </div>
        <div className='iconos-panel-escribir'>
            <InsertPhotoIcon />
            <GifBoxIcon />
            <ListAltIcon />
            <SentimentSatisfiedAltIcon />
            <InsertInvitationIcon />
            <LocationOnIcon />
            <BotonTwittear />
        </div>

    </div>
}

function TwitIconos(params) {
    return <div className='icon-twit'>
        {<params.tipo />}
        <p>{params.text}</p>
    </div>
}

function Twit(params) {

    const {foto, name,text,nameCount,time, msg, view, ret, like,  } = params

    return <div className='twit'>
        <div className='input-twit'>
            <Rostro foto={foto} />
            {name}
            {nameCount}
            {time}horas
        </div>
        {text}
        <div className='iconos-twit'>
            <TwitIconos tipo={ChatBubbleOutlineIcon} text={msg} />
            <TwitIconos tipo={RepeatIcon} text={ret} />
            <TwitIconos tipo={FavoriteBorderIcon} text={like} />
            <TwitIconos tipo={LeaderboardIcon} text={view} />
            <IosShareIcon/>
        </div>
    </div>
}

export function ParaTi(params) {
    return <div>
        <PanelEscribir />
        <Twit foto={foto1} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
        <Twit foto={foto1} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
        <Twit foto={foto1} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
        <Twit foto={foto1} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
    </div>
}