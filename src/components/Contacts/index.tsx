import gitlogo from "../../assets/icons/GithubLogo.svg"
import linkedin from "../../assets/icons/LinkedinLogo.svg"
import envelope from "../../assets/icons/EnvelopeSimple.svg"
import whatsapp from "../../assets/icons/whatsapp1.svg"
import arrow from "../../assets/icons/ArrowUpRight.svg"

import styles from "./styles.module.css"

export function Contacts() {
  return (
    <div className={styles.container}>
      <h5>Contato</h5>
      <p className={styles.contactText}>Gostou do meu trabalho?</p>
      <h1 className={styles.contactTitle}>Entre em contato ou acompanhe as minhas redes sociais!</h1>
      
      <div className={styles.contacts}>
        <div className={styles.contactsBox}>
          <a href="" className={styles.links}><img src={linkedin} alt="Logo do linkedin" />Linkedin</a>
          <img src={arrow} alt="Icone de seta" />
        </div>
        <div className={styles.contactsBox}>
          <a href="" className={styles.links}><img src={envelope} alt="Icone de envelope" />E-mail</a>
          <img src={arrow} alt="Icone de seta" />
        </div>
        <div className={styles.contactsBox}>
          <a href="" className={styles.links}><img src={whatsapp} alt="Logo do whatsapp" />Whatsapp</a>
          <img src={arrow} alt="Icone de seta" />
        </div>
        <div className={styles.contactsBox}>
          <a href="" className={styles.links}><img src={gitlogo} alt="Logo do github" />GitHub</a>
          <img src={arrow} alt="Icone de seta" />
        </div>
      </div>
    </div>
  )
}