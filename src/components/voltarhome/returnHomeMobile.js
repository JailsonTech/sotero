import React from "react";
import styles from "../Styles/styleGeral.module.css";
import { Link } from "react-router-dom";


export default function Voltar() {
 return (
  <>
    {/*...............Retornar home/Mobile.................*/}

    <div className={styles.containerFechar}>
       <Link to="/" className={styles.link}>        
         <h1 className={styles.fecharForm}>X</h1>         
       </Link>
    </div>
  </>
  );
 };