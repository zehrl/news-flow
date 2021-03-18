import News from '../images/news.png';

const Header = ({ title }) => {

    return (
        <header className='header'>
                <div className="menu">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>
                <h1>{title}</h1>
                <img className='news' src={News} alt='News' href='/'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'News Flow',
}

export default Header



