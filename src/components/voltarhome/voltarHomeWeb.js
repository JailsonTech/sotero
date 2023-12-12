import React from "react";
import styles from "../Styles/styleGeral.module.css";
import { Link } from "react-router-dom";
import  Casa from "../images/casa.png";

export default function Retorno() {
 return (
  <>
     {/*.........LINHA 2 - RETORNAR HOME....................*/}
    <div className={styles.returnHome}>
       <figure className={styles.figureHome}>         
          <Link to="/" className={styles.link}>   
          <img alt="casa" src={Casa} className={styles.homePage1}/>   
          </Link> 
          <figcaption className={styles.ficapt}>Pág Inicial</figcaption> 
       </figure> 
    </div> 
  </>
  );
 };