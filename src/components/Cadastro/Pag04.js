import React from "react";
import styles from "../Styles/styleGeral.module.css";
import '../Styles/Pag04.css';
import { Link } from "react-router-dom";
import  Verificar from "../images/verificar.png";

function Page04 (){
  return(
   <>   
   {/*......... SECTION - CONTAINER GERAL....................*/}
     <section className={styles.conteudo}>          
         <header className={styles.cadastro}>                
            <h2 className={styles.textCadastro}>CADASTRO</h2>               
         </header>     

        {/*.........LINHA 3 - FINALIZADO....................*/}

        <div className="formContainer4">
            <h2 className="textFinalizado">Finalizado</h2>
             
             {/*.........SIGN VERIFICAR....................*/}
             <figure className="Okverificar">
              <img alt="verificar" src={Verificar} className="Ok"/>                
             </figure>
             <p className="textoExito">
               Conta criada com êxito
             </p>
             {/*.........BOTÃO....................*/}
                            
                 <div className="containerButtons4">                 
                   <Link to="/" className={styles.link}>
                      <button className="buttonOk">Ok</button>
                   </Link>
                 </div>  
        </div>        
    </section>
   </>  
          
     )
}

export default Page04;