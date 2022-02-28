import "../../style/style.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const PageForNoLoading = () => {
    return (
        <div className="nopage">
            <Link to="/" style={{'textDecoration': 'underline', 'color': 'blue', 'fontSize': '20px'}}>Back to main page</Link>
            <img src="https://bitkoinblog.ru/assets/images/404.png" alt="404page" />
        </div>
        
    )
}

export default PageForNoLoading;