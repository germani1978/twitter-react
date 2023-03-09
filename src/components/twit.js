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
    const {foto,post, name,text,nameCount,time, msg, view, ret, like,  } = params

    return <div className='twit'>
        <div className='input-twit'>
            <Rostro foto={foto} />
            <p>{name}</p>
            <p>{nameCount}</p>
            <p>{time}horas</p>
        </div>
        <p className="text-twit">{text}</p>
        { post && <img className="foto-twit" alt="img" src={post}/>  }
        
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