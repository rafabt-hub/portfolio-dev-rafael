import styles from "./app.module.css"

import { Job } from "./components/Tittle-projects"
import { Header } from "./components/Header"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"

export default function App() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <Job />
        <Projects />
        <Services />
      </div>
    </main>
  )
}
