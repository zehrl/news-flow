import React from 'react';

const Footer = ({ text }) => {
    return (
        
<div className="footer">
    <h4>{text}</h4>
</div>
    )
}

Footer.defaultProps = {
    text: 'Pod 2 © 2021',

}


export default Footer 