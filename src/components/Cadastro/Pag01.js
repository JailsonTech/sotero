import React from "react";
import styles from "../Styles/styleGeral.module.css";
import '../Styles/Pag01.css';
import { Link } from "react-router-dom";
import  Perfil from "../images/perfil.png";
import Retorno from "../voltarhome/voltarHomeWeb.js";
import VoltarMob from "../voltarhome/returnHomeMobile.js";

export default function Page01() {
   return (
      <>
         {/*.........LINHA 1 section CONTAINER GERAL....................*/}
         <section className={styles.conteudo}>         
            <header className={styles.cadastro}>
               <h2 className={styles.textCadastro}>CADASTRO</h2>                             
            </header>

            {/*.........LINHA 2 - RETORNAR HOME....................*/}
            <Retorno/>       

            {/*.........LINHA 3 - CRIAR CONTA....................*/}

            <div className="boxFormGeral">
               <header className="criarConta1">
                 <h2 className="textCriar1">Criar uma Conta</h2>   
                 <VoltarMob/>                           
               </header>
                
               {/*.........FORMULÁRIO....................*/}
               <div className="boxFormulario" >
                  <figure className="boxLogopessoa">
                     <img alt="perfil" src={Perfil} className="Logopessoa"/>                     
                  </figure>
                  {/*...........BOTÃO.........*/}
                  <div className="boxBotao">
                     <Link to="/Pag02" className={styles.link}>
                        <input id="criar" className="buttonPage1" type="submit" value="Criar" />
                     </Link>
                  </div>

                  {/*...........TEXTO - INICIE SESSÃO.........*/}
                  <div className="temConta">
                     <p className="textConta">Se já tem conta
                        <Link to="/login" className={styles.link}>
                           <span className="linkInicieSessao"> inicie sessão</span>
                        </Link>
                     </p>
                  </div>
                  <div className={styles.numPag}>
                     <p className={styles.pNumPag}>1</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};