import Head from 'next/head'

function Meta({title, keywords, desc}) {
    return (
        <Head>
            <meta description={desc}></meta>
            <meta keywords={keywords}></meta>
            <meta charSet="utf-8"></meta>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps={
    title:"Next.js crash'd",
    keywords: ['next.js', 'crash course', 'hmm'],
    desc:'Next.js - fundamentals of Next.js such as SSR & SSG, routing, data fetching, apis'
}

export default Meta
