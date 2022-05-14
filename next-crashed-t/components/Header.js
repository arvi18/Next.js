import headerStyles from '../styles/Header.module.css'

function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Next.js</span> Tutorial
            </h1>
            <p className={headerStyles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqus nihil porro, facere aut aperiam doloribus cupiditate neque.</p>
        </div>
    )
}

export default Header
