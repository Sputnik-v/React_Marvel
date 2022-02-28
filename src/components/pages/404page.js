import "../../style/style.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const PageForNoLoading = () => {
    return (
        <div className="nopage">
            <Helmet>
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content={`page 404`}/>
                <title>{`Page not found`}</title>
            </Helmet>
            <Link to="/" style={{'textDecoration': 'underline', 'color': 'blue', 'fontSize': '20px'}}>Back to main page</Link>
            <img src="https://bitkoinblog.ru/assets/images/404.png" alt="404page" />
        </div>
        
    )
}

export default PageForNoLoading;