import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex flex-column flex-sm-column flex-md-row justify-content-md-around">
          <div className="d-flex justify-content-around w-100 w-sm-25 w-md-25 w-lg-25 w-xl-25 p-4">
            <div>
              <h4 className="footer-headings">bigbasket</h4>
              <ul className="footer-list">
                <li>About Us</li>
                <li>In News</li>
                <li>Green bigbasket</li>
                <li>Privacy Policy</li>
                <li>Affiliate</li>
                <li>Terms and Conditions</li>
                <li>Careers At bigbasket</li>
                <li>bb Instant</li>
                <li>bb Daily</li>
                <li>bb Blog</li>
                <li>bbnow</li>
              </ul>
            </div>
            <div>
              <h4 className="footer-headings">Help</h4>
              <ul className="footer-list">
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>bb Wallet FAQs</li>
                <li>bb Wallet T&Cs</li>
                <li>Vendor Connect</li>
              </ul>
            </div>
          </div>
          {/* Download app section */}
          <div className="p-4">
              <h4 className="footer-headings">Download Our App</h4>
              <div className="d-flex">
                  <div className="bg-dark text-light d-flex justify-content-between align-items-center p-2 download-app-icon-container m-3">
                    <i className="fa-brands fa-google-play download-app-icons"></i>
                    <div>
                        <p className="m-0 download-app-para">GET IT ON</p>
                        <h4 className="download-app-heading"><span>Google</span> play</h4>
                    </div>
                  </div>
                  <div className="bg-dark text-light d-flex justify-content-between align-items-center p-2 download-app-icon-container m-3">
                    <i className="fa-brands fa-apple download-app-icons"></i>
                        <div>
                            <p className="m-0 download-app-para">Download on the</p>
                            <h4 className="download-app-heading">App Store</h4>
                        </div>
                  </div>
              </div>
          </div>
          {/* Social Media Sections */}
          <div className="p-4">
              <h4 className="footer-headings mb-3">Get Social With Us</h4>
              <div className="d-flex ">
                  <div className="text-light social-media-fb-container">
                    <i className="fa-brands fa-facebook-square social-media-icons"></i>
                  </div>
                  <div className="text-light social-media-pi-container">
                    <i className="fa-brands fa-pinterest-square social-media-icons"></i>                  
                  </div>
                  <div className="text-light social-media-twitter-container">
                    <i className="fa-brands fa-twitter-square social-media-icons"></i>
                  </div>
                  <div className="text-light social-media-insta-container">
                    <i className="fa-brands fa-instagram-square social-media-icons"></i>
                  </div>
              </div>
          </div>
        </div>
        <hr/>
        <div className="d-flex justify-content-center">
            <div style={{width: "80%"}}>
                <h4 className="footer-categories-heading">POPULAR CATEGORIES:</h4>
                <p className="footer-categories-para">Fruits & Vegetables, Basmati Rice, Green Tea, OTC, Cheese, Dry Fruits, Chocolates & Sweets, Soft Drinks, Energy Drinks, Bakery, Cakes & Dairy, Olive Oils, Foodgrains, Oil & Masala, Sunflower Oils, Liquid Soaps & Bars</p>

                <h4 className="footer-categories-heading">POPULAR BRANDS:</h4>
                <p className="footer-categories-para">Amul, Haldirams , Tropicana, Kelloggs, Dettol, MTR, Bru , McCain, Ariel, Britannia, Nescafe , Colgate, Horlicks, Galaxy, Complan</p>
            
                <h4 className="footer-categories-heading">CITIES WE SERVE:</h4>
                <p className="footer-categories-para">Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Shambhu, Ranchi</p>
            </div>
        </div>

        <div className="footer-copyright-container d-flex justify-content-center">
            <p>Copyright &copy; 2022-2024 GSK Grocery Supplies Pvt Ltd</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
