const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);




function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 mx-auto mt-5 opacity-1 centertext border-dark ' + bg + txt;
    }

    function styles(){
        const mw = props.maxWidth ? props.maxWidth: "";
        return mw
    }
    return(
        <div className={classes()} style={{maxWidth:styles()}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title centertext">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}

            </div>
        </div>
    )
}

function NameTag(props) {
    function classes(){
        return 'card float-right opacity-1 centertext border-dark bg-info text-dark'
    }

    return(
        <div className={classes()}>
            <div className ="card-body">
                {props.email}
            </div>

        </div>
    )

}
