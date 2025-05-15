import styles from "./app.module.css"

import { Header } from "./components/Header"

export default function App() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
      </div>
    </main>
  )
}
