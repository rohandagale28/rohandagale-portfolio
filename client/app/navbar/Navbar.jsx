'use client'
import './navbar.scss'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import githubLogo from '../assets/icons/github.svg'
import Image from 'next/image';


export default function Navbar() {
    const pathname = usePathname()

    return (
        <main className="navbar">
            <div className="github-profile">
                <a href="" target='_blank' className='github-profile-link'>
                    <div className="github-profile-logo">
                        <Image src={githubLogo} alt='GitHub' />
                    </div>
                    <div className='github-profile-title'>
                        GitHub
                    </div>
                </a>
            </div>
            <div className="navlinks">
                <div className="link">
                    <Link href="/" className={pathname == "/" ? "active" : ""} >
                        <p>Home</p>
                    </Link>
                </div>
                <div className="link">
                    <Link href="/projects" className={pathname == "/projects" ? "active" : ""} >
                        <p>Projects</p>
                    </Link>
                </div>
                <div className="link">
                    <Link href="/stack" className={pathname == "/stack" ? "active" : ""} >
                        <p>Stack</p>
                    </Link>
                </div>
                <div className="link">
                    <Link href="/connect" className={pathname == "/connect" ? "active" : ""} >
                        <p>Connect</p>
                    </Link>
                </div>
            </div>
        </main >
    )
}