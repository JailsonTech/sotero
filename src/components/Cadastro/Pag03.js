import React from "react";
import styles from "../Styles/styleGeral.module.css";
import '../Styles/Pag03.css';
import { Link } from "react-router-dom";
import Retorno from "../voltarhome/voltarHomeWeb.js";
import VoltarMob from "../voltarhome/returnHomeMobile.js";

function Page03 (){
  return(
   <>   
   {/*......... SECTION - CONTAINER GERAL....................*/}
     <section className={styles.conteudo}>          
         <header className={styles.cadastro}>                
                <h2 className={styles.textCadastro}>CADASTRO</h2>               
         </header>     
         
         {/*.........LINHA 2 - RETORNAR HOME....................*/}          
         <Retorno/>  

        {/*.........LINHA 3 - CRIAR CONTA....................*/}

        <div className="formContainer3"> 
             <header className="perfil">
                <h2 className="textPerfil">Perfil</h2>
                <VoltarMob/>
             </header> 
             {/*.........AVISO DADOS....................*/}
             <text className="avisoDados3">
              <p>Seu ID será visto por outros jogadores</p>
              <p>Exemplo: sultan, pavan, mar_bravo </p>
             </text>

             {/*.........FORMULÁRIO....................*/}

             <div className="cadastrar3" >     
               <form className="formPag3">

                 <div className="Input3">
                    <label htmlFor="ID">Id jogador</label>
                    <input id="ID" type="text" className="Jogador"/>
                 </div>

                 <div className="Input3">
                   <label htmlFor="email">Endereço email</label>
                   <input type="email" id="email" required  className="email"/>                  
                 </div>

                 <div className="Input3">
                   <label htmlFor="password">Senha</label>
                   <input type="password" id="password" required  className="email"/>                  
                 </div>
                 
                 <div className="containerButtons">
                  <Link to="/Pag02" className={styles.link}>
                     <button className="button1">Voltar</button>
                  </Link>
                  <Link to="/Pag04" className={styles.link}>
                      <button className="button2">Avançar</button>
                  </Link>
                 </div>
                 <div className={styles.numPag}>
                   <p className={styles.pNumPag}>3</p>
                </div>
               </form>
             </div>  
        </div>        
    </section>
   </>  
          
     )
}

export default Page03;