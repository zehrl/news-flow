import Jumbotron from 'react-bootstrap/Jumbotron'
import { useState} from 'react'

const Header = ({ title }) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className='header'>
            <Jumbotron fluid>
                <h1>{title}</h1>
                <div className='hamburber' toggled={isOpen} toggle={setOpen} />
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </Jumbotron>
        </header>
    )
}

Header.defaultProps = {
    title: 'News Flow',
}

export default Header