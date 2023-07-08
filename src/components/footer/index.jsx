import "./style.scss"
import location from "../../assets/icon/location.svg"
import logos from "../../assets/icon/logos.svg"
import flecha from "../../assets/icon/chevron-bottom.svg"
import useBreakpoint from "../../hooks/useBreakPoint"
import { useState } from "react"

const Footer = () => {
  const { phone, desktop } = useBreakpoint();
  const [ footer, setFooter ] = useState(false);

  const buttonHandler = (e) => {
    e.preventDefault();
    if(footer == false){
      setFooter(true);
    }
    else{
      setFooter(false);
    }
  }

  return (
    <>
    {phone && <button 
      onClick={buttonHandler} 
      className="buttonDropDown"
      >More about CORA’L
      <img 
        className="flecha"
        src={flecha} 
        style={{transform: `rotate(${footer ? "180deg":"0deg"})`}}/>
    </button>} 

    {(desktop || (phone && footer) ) &&  
    
    
      <footer>
        <div className="listcontainer">
          <div className="lista">
            <span>Shop by Category</span>
              <a href="#">Skincare</a>
              <a href="#">Personal Care</a>
              <a href="#">Handbags</a>
              <a href="#">Apparels</a>
              <a href="#">Watches</a>
              <a href="#">Eye Wear</a>
              <a href="#">Jewellery</a>
          </div>
          {desktop ? (
              <>
                <div className="lista">
                    <span>About</span>
                      <a href="#">Contact Us</a>
                      <a href="#">About Us</a>
                      <a href="#">Careers</a>
                      <a href="#">Press</a>
                  </div>
                  <div className="lista">
                    <span>Policy</span>
                      <a href="#">Return Policy</a>
                      <a href="#">Terms of Use</a>
                      <a href="#">Sitemap</a>
                      <a href="#">Security</a>
                      <a href="#">Privacy</a>
                      <a href="#">EPR Compliance</a>
                  </div>
              </>         
          )
          :
          (
            <>
            <div className="lista">
                <span>Policy</span>
                <span>
                <a href="#">Return Policy |</a>
                <a href="#"> Terms of Use |</a>
                <a href="#"> Sitemap |</a>
                <a href="#"> Security |</a>
                <a href="#"> Privacy |</a>
                <a href="#"> EPR Compliance</a>
                </span>
            </div>
            <div className="lista">
                    <span>About</span>
                      <span>
                      <a href="#">Contact Us |</a>
                      <a href="#"> About Us |</a>
                      <a href="#"> Careers |</a>
                      <a href="#"> Press</a>
                      </span>
          </div>
          <div className="linha"></div>
          </>
          )
          }
        </div>
        <div className="box">
          <img className="logos" src={logos} alt="logos" />
          <div className="location">
            <img src={location} alt="location" />
            <p className="us">United States</p>
          </div>
          <span> © 2021 | Cora Leviene All Rights Reserved </span>
        </div>
      </footer>
    }
      </>
    );
  }


export default Footer;