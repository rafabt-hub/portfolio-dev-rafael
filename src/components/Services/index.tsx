import devices from "../../assets/icons/Devices.svg"
import hds from "../../assets/icons/HardDrives.svg"
import infinity from "../../assets/icons/Infinity.svg"

import styles from "./styles.module.css"

export function Services() {
  return (
    <div className={styles.container}>
      <span>Meu serviços</span>
      <h2>Como posso ajudar seu negócio</h2>

      <div className={styles.section}>
        <div className={styles.servicesBox}>
          <img src={devices} alt="Icone de dispositivos" />
          <h5>Websites e Aplicativos</h5>
          <h6>Desenvolvimento de interfaces</h6>
        </div>

        <div className={styles.servicesBox}>
          <img src={hds} alt="Icone de discos rigidos" />
          <h5>API e banco de dados</h5>
          <h6>Criação de serviços do sistema</h6>
        </div>

        <div className={styles.servicesBox}>
          <img src={infinity} alt="Icone do infinito" />
          <h5>DevOps</h5>
          <h6>Gestão e infraestrurura da aplicação</h6>
        </div>
      </div>
    </div>

  )
}