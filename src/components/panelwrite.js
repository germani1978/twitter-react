import Rostro from './rostro.js'
import foto from '../images/foto1.jpg'


import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BotonTwittear from './botontwittear';

export function PanelEscribir(params) {
    return <div className='panel-escribir'>
        <div className='input-panel-escribir'>
            <Rostro foto={foto} />
            <input className='input-only' type="text" placeholder='Que esta pasando' />
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