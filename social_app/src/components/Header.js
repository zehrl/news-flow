import News from '../images/news.png'
import Jumbotron from 'react-bootstrap/Jumbotron'





const Header = ({ title }) => {

    return (
        <header className='header'>
            <Jumbotron fluid>
                <div className="menu">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>
                <h1>{title}</h1>
                <img className='news' src={News} alt='News' href='/'/>
            </Jumbotron>
        </header>
    )
}

Header.defaultProps = {
    title: 'News Flow',
}

export default Header



