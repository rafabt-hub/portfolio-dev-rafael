import projectOne from "../../assets/images/Thumbnail_Project-01.png"
import projectTwo from "../../assets/images/Thumbnail_Project-02.png"
import projectTree from "../../assets/images/Thumbnail_Project-03.png"
import projectFour from "../../assets/images/Thumbnail_Project-04.png"
import projectFive from "../../assets/images/Thumbnail_Project-05.png"
import projectSix from "../../assets/images/Thumbnail_Project-06.png"

import styles from "./styles.module.css"

export function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.backgroundBox}>
       <img src={projectOne} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Travelgram</h3>
        <h4>
        Rede social onde as pessoas mostram os registros de suas viagens pelo mundo 
        </h4>
      </div>

      <div className={styles.backgroundBox}>
       <img src={projectTwo} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Tech News</h3>
        <h4>
        Homepage de um portal de noticias sobre a área de tecnologia 
        </h4>
      </div>

      <div className={styles.backgroundBox}>
       <img src={projectTree} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Página de Receita</h3>
        <h4>
        Página com passo a passo de uma receita para cupcakes 
        </h4>
      </div>

      <div className={styles.backgroundBox}>
       <img src={projectFour} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Zingen</h3>
        <h4>
        Landing Page completa e responsiva de um aplicativo de Karaokê 
        </h4>
      </div>

      <div className={styles.backgroundBox}>
       <img src={projectFive} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Refund</h3>
        <h4>
        Um sistema para pedido e acompanhamento de reembolso 
        </h4>
      </div>

      <div className={styles.backgroundBox}>
       <img src={projectSix} className={styles.imgProject} alt="imagem projeto 1" />
        <h3>Página de turismo</h3>
        <h4>
        Página com as principais informações para quem quer viajar para Busan 
        </h4>
      </div>
    </div>
  )
}