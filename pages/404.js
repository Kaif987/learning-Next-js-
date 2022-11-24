import Link from "next/link";
import styles from "../styles/404.module.css"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()

    useEffect(() =>{
        setTimeout(() =>{
            router.push("/")
        }, 3000)
        console.log("useEffect ran")
    }, [])

    return ( 
        <div className={styles.container}>
            <h2 className="error">Oops....</h2>
            <p>You are searching for a page that does not exist on the server</p>
            <p>Go back to the <Link href="/" className={styles.message}>Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;