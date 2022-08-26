import { useGlobalContext } from "./Context/Context";

export default function Counter(){
    const { counter, setCounter } = useGlobalContext();

    return (
        <div>
            <div className="row">
            <div className="col-md-2 greyBackground"></div>
            <div className="col-md-2"></div>
            <div className="col-md-4 centered">
                How many times have you clicked on the button?
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2 greyBackground"></div>
            </div>
            <div className="row">
                <div className="col-md-2 greyBackground"></div>
                <div className="col-md-3"></div>
                <div className="col-md-1">
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
                        Click Here!
                    </button>
                </div>
                <div className="col-md-1 centered">
                    <br/>
                    <h3>{counter}</h3>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-2 greyBackground"></div>
            </div>
            <div className="row">
            <div className="col-md-2 greyBackground"></div>
            <div className="col-md-8"><br/></div>
            <div className="col-md-2 greyBackground"></div>
            </div>
        </div>
    );
}