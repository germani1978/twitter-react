import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function PanelBuscar(params) {
    return <div className="cont-search">
        <SearchOutlinedIcon className="icon-input" />
        <input className="search-input" placeholder="Buscar en twitter"/>
    </div>
}

function TemasTrending(params) {
    return <div className="cont-trending-topics">
        <h3>Tendencias para ti</h3>
        <div className="cont-trendin-topic">
            <h3>Elon Musk</h3>
            <p>24,3 mil tweets</p>
        </div>
        <div className="cont-trendin-topic">
            <h3>Elon Musk</h3>
            <p>24,3 mil tweets</p>
        </div>
        <div className="cont-trendin-topic">
            <h3>Elon Musk</h3>
            <p>24,3 mil tweets</p>
        </div>
        <div className="cont-trendin-topic">
            <h3>Elon Musk</h3>
            <p>24,3 mil tweets</p>
        </div>
        <div className="cont-trendin-topic">
            <h3>Elon Musk</h3>
            <p>24,3 mil tweets</p>
        </div>
    </div>
}
export function RightBar(params) {
    return <div className="rightbar">
        <PanelBuscar/>
        <TemasTrending/>
    </div>
}