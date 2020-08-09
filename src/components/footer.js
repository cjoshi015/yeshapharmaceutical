import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <FooterContainer className="mainfooter">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Quick Links</h4>
                        <ul className="list-styled">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Products</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>GLOBAL PRESENSE</h4>
                        <ul className="list-styled">
                            <li>Tajikistan</li>
                            <li>Russia</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-styled">
                            <li>Yesha Pharmaceutical</li>
                            <li>hihidhf</li>
                            <li>hihidhf</li>
                            <li>hihidhf</li>
                        </ul>
                    </div>  
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        Yesha Pharmaceutical 2019 | Made by Chandan Joshi
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        padding-top:3rem;
        color : var(--mainWhite); 
    }

    .footer-bottom{
        padding-top:3rem;
        padding-bottom: 2rem;
    }

`;