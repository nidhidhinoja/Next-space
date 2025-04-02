import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
        <Link href= {"/"} >
      <Image
        src="/logo.png"
        alt="NextSpace Logo"
        width={216}
        height={30}
        className={styles.logo}
        />
        </Link>
        <ul className={styles.links}>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/services"}>Services</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/portfolio"}>Portfolio</Link></li>
            <li><Link href={"/testimonials"}>Testimonials</Link></li>
            <li><Link href={"/faq"}>FAQ</Link></li>
        </ul> 
    </nav>
  );
}