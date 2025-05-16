import arrowDown from "../../assets/images/CaretDoubleDown.png"

import styles from "./styles.module.css"

export function Job () {
  return (
    <div className={styles.container}>
      <img src={arrowDown} alt="Seta dupla para baixo" />
      <span>Meu trabalho</span>
      <h1>Veja os projetos em destaque</h1>
    </div>
  )
}