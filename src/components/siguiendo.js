import foto from '../images/foto1.jpg'
import { PanelEscribir } from './panelwrite';
import Twet from './twit';

export function Siguiendo(params) {
    return <div>
         <PanelEscribir />
        <Twet foto={foto} name="Maria" nameCount="@maria" time={5} msg={122} ret={23} like={8} text="Esto es una prueba" view={56}/>
    </div>
}

