import { Link } from "react-router-dom";

export default function Errs() {
    return (
        <>
            <div>
                <center style={{'padding': '100px 0 10px 0', 'fontSize': 'x-large', 'textTransform': 'capitalize', 'fontWeight': 'bold', 'color': 'gray'}}>
                    <img className="" src="https://accorda.netlify.app/error.jpg" width="500" />
                    <br />
                    <h1 className="">
                    Oops! we couldn't find this page
                    </h1>
                    <div>
                        <Link to="/">
                            <button style={{'padding': '10px 20px', 'margin': '20px 0 50px', 'fontSize': 'large'}}>Return Home</button>
                        </Link>
                    </div>
                </center>
            </div>
        </>
    )
}