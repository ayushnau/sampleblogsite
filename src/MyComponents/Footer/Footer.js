import React from 'react'

const Footer = () => {
    return (
        <div className="masterfootercontainer">
           <div className="footercontainer d-flex">
               <div className="footerbelief">
                 <h2>Our Belief</h2>
                 We are orgainizational culture and identity specialists. Our Mission is to help companies articulate what they are and why they are.
                 <div className="footerbelief__email"> <input type="email" placeholder="Your Email adress here" />
                 <button>Enter<i class="fas fa-envelope fa-lg"></i></button></div>
                   
                   <p>©All Rights Reserved</p>
               </div>
              <div className="footerthisisaboutus d-flex">
                    <div className="footer__Company">
                        <ul className="footer__companyul">
                            <li><h4>Company</h4></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer__Category">
                        <ul className="footer__Categoryul">
                            <li><h4>Category</h4></li>
                            <li><a href="#">lifestyle</a></li>
                            <li><a href="#">Educational</a></li>
                            <li><a href="#">Anoynmous</a></li>
                        </ul>
                    </div>
                    <div className="footer__Address">
                        <ul className="footer__Addressul">
                            <li><h4>Address</h4></li>
                            <li><a href="#">C-116 Kulna Market, New Tehri</a></li>
                        </ul>
                    </div>
                    <div className="footer__social">

                        <ul className="footer__socialul">
                            <li><h4>Social</h4></li>
                            <li><a href="#"><i class="fab fa-twitter-square"></i>Twitter</a></li>
                            <li><a href="#"><i class="fab fa-facebook"></i>Facebook</a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i>LinkedIn</a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i>Instagram</a></li>
                            <li><a href="#"><i class="fab fa-youtube-square"></i>Youtube</a></li>
                        </ul>
                    </div>
              </div>
           </div>
        </div>
    )
}

export default Footer
