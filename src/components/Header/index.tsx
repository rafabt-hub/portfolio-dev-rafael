import avatar from "../../assets/images/rafael.png"
import githubIcon from '../../assets/icons/GitHub.svg'
import htmlIcon from '../../assets/icons/HTML.png'
import cssIcon from '../../assets/icons/CSS.png'
import jsIcon from '../../assets/icons/JavaScript.png'
import reactIcon from '../../assets/icons/React.png'
import nodeIcon from '../../assets/icons/Node.js.png'

import styles from "./styles.module.css"

export function Header() {
  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" />

      <header>
      <h1>Hello World! Meu nome é <span>Rafael Thomaz</span> e sou</h1>
      <h2>Desenvolvedor Web Fullstack</h2>
      <p>
        Transformo necessidades em aplições reais, envolventes e funcionais. Desenvolvo sistemas através
        da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
      </p>
      </header>

      <div className={styles.technologies}>
       <div className={styles.techBox}>
        <img src={githubIcon} alt="Logo do github" />
        <span>GitHub</span>
       </div>
      
       <div className={styles.techBox}>
        <img src={htmlIcon} alt="Logo da tecnologia HTML" />
        <span>HTML</span>
       </div>

       <div className={styles.techBox}>
        <img src={cssIcon} alt="Logo da tecnologia CSS" />
        <span>CSS</span>
       </div>

       <div className={styles.techBox}>
        <img src={jsIcon} alt="Logo da tecnologia Javascript" />
        <span>Javascript</span>
       </div>

       <div className={styles.techBox}>
        <img src={reactIcon} alt="Logo da tecnologia React" />
        <span>React</span>
       </div>

       <div className={styles.techBox}>
        <img src={nodeIcon} alt="Logo da tecnologia Node.js" />
        <span>Node.js</span>
       </div>
      </div>
    </div>
  )
}