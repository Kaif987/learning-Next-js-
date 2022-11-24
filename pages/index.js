import About from "./About";
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div >
      <h1 className={styles.title}>Home Page</h1>
      <p className= {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam repellat quisquam perferendis nihil autem quia dolor harum. Aliquam et magnam impedit earum fugiat adipisci natus doloribus, reprehenderit qui ipsa.</p> 
      <p className= {styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sunt impedit commodi voluptatibus at quaerat molestias iste ipsam aliquid, aspernatur rem recusandae cumque similique corporis accusantium magni explicabo, soluta provident.</p>
      <Link href = "/Ninja/Ninja" className={styles.btn}>See ninja listing</Link>
    </div>
  )
}
