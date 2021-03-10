import React from 'react';
import '../sass/footer.scss';


const Footer = ({ text }) => {
    return (
        
<div className="main-footer">
    <h4>{text}</h4>
</div>
    )
}

Footer.defaultProps = {
    text: 'Pod 2 © 2021',

}


export default Footer