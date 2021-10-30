import { useRouter } from "next/router"
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
    const router=useRouter()

    return (
        <div className={styles.main}>
            <div onClick={()=>router.push('/')} className="Home">Home</div>
            <div onClick={()=>router.push('/feed/1')} className="Feed">Feed</div>
            <div onClick={()=>router.push('/eom')} className="EOM">EOM</div>
            <div onClick={() => (window.location.href = 'https://twitter.com/portexe')}>Twitter</div>
        </div>
    )
}
