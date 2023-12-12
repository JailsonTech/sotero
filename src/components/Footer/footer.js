import React from "react";
import './styleFooter.css';
import styles from "../Styles/styleGeral.module.css";
import { Link } from "react-router-dom";
import Whatsapp from "../images/whatsap.png";
import Facebook from "../images/facebook.png";
import Email from "../images/email3.png";
import FenixFoot from "../images/fenixleft.png";

export default function Footer() {  
  return (  
   <footer className='footer'>
      <div className="boxContainer">
         <div className="boxTexto">
           <h2 className="titleSotero">Sotero</h2>
           <h2 className="titleGames">Games</h2>
         </div>
         <figure id="fenixFooter">
           <img alt="Img Whatsap" src={FenixFoot} className="fenixFooter"/> 
         </figure>
      </div>

       {/*.....IMAGENS REDE SOCIAL.....*/}

       <Link target={"_blank"} className={styles.link} to="https://web.whatsapp.com/ ">
          <figure className='whatsap'>  
            <img alt="Img Whatsap" src={Whatsapp} className="imgWhatsap"/>             
            <figcaption>Whatsapp</figcaption>
          </figure>
        </Link>
        <Link target={"_blank"} className={styles.link} to="https://pt-br.facebook.com/login/device-based/regular/login/ ">
          <figure className='facebook'>                
              <img alt="Img Facebook" src={Facebook} className="imgFacebook"/>  
              <figcaption>Facebook</figcaption>
          </figure>
        </Link>
        <Link target={"_blank"} className={styles.link} to="https://is.gd/JIBGgr">
          <figure className='email'> 
              <img alt="Img Email" src={Email} className="imgEmail"/>  
              <figcaption>E-mail</figcaption>
          </figure>
        </Link>
   </footer>
  )
};