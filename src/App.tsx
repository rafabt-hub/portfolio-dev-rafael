import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Job } from "./components/job"
import { Projects } from "./components/projects"

export default function App() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <Job />
        <Projects />
      </div>
    </main>
  )
}
