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

import Twet from './twit';

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

export function ParaTi(params) {
    return <div>
        <PanelEscribir />
        <Twet foto={foto1} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
      
    </div>
}