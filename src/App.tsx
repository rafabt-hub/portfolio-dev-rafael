import styles from "./app.module.css"

import { Job } from "./components/Tittle-projects"
import { Header } from "./components/Header"
import { Contacts } from "./components/Contacts"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects_temp"

export default function App() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <Job />
        <Projects />
        <Services />
        <Contacts />
      </div>
    </main>
  )
}
