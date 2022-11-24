import Link from "next/link"
import Image from "next/Image"

const Navbar = () => {
    return (
        <div>
            <Image src= "/logo.png" width = {128} height = {77} />
            <nav>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/">Contact</Link>
            </nav>
        </div> 
     );
}
 
export default Navbar;