import img from './error404.png'

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '250px', height: '250px', margin: '0 auto'}} src={img} alt="error" />
    )
}

export default ErrorMessage;