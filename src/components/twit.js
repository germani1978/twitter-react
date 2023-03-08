import Rostro from "./rostro"

// import ICONOS
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import IosShareIcon from '@mui/icons-material/IosShare';



function TwitIconos(params) {
    return <div className='icon-twit'>
        {<params.tipo />}
        <p>{params.text}</p>
    </div>
}

function Twet(params) {
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

export default Twet