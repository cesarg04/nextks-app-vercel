import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
    return (
        <MainLayout>
            <h1>Contact Page</h1>

            <h1 className={styles.title} >
                Ir a <Link href={'/'}>Home</Link>
            </h1>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>pages/contact.jsx</code>
            </p>
        </MainLayout>
    )
}
