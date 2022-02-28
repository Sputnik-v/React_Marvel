import './singleCharacterLayout.scss';
import {Helmet} from "react-helmet";

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content={name}/>
                <title>{`${name} - marvel char`}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;