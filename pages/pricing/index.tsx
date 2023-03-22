import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../components/layouts/MainLayout';
// import { MainLayout } from "@/components/layouts/MainLayout"

const index = () => {
    return (
        <MainLayout>
            <h1 >Pricing Page</h1>

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

export default index;
