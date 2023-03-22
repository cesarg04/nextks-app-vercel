
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>

            <h1 className={styles.title} >
                Ir a <Link href={'contact'}>Contact</Link>
            </h1>

            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>pages/about.js</code>
            </p>
        </>

    )
}

AboutPage.getLayout = function getLayout(page: any) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}