import React from 'react';

// Sticky footer source:
// https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/
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

export default Footer;