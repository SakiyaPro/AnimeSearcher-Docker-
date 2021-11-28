import Head from 'next/head'
import { Thumbnail } from '../components/Thumbnail'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
    let thumbnailHeight = "180px"
    let thumbnailWidth = "280px"
    return (
        <>
            <Head>
                <title>AnimeSearcher</title>
                <meta name="description" content="おすすめアニメを検索！" />
                <link rel="icon" href="/image/favicon/favicon.png" />
                <link href="https://raw.githubusercontent.com/nicolas-cusan/destyle.css/master/destyle.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
            </Head>

            <header>
                <div id={styles.Header}>
                    <Header />
                </div>
            </header>

            <main>
                <div class={styles.flexItem}>

                    <div class={styles.wrapper}>

                        <section class={styles.content}>
                            <h2 class={styles.secTitle}>Pick Up!!</h2>
                            <ul class={styles.horizontalList}>
                                <li class={styles.item}><Thumbnail src="/image/sample/3D彼女 リアルガール.jpg" title="3D彼女 リアルガール" alt="3D彼女 リアルガール" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/Another.jpg" alt="Anothe" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/BLEACH「Memories in the Rain」.jpg" alt="BLEACH「Memories in the Rain」" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/D.C. ～ダ・カーポ～.jpg" alt="D.C. ～ダ・カーポ～" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/ONE PIECE FILM GOLD.jpg" alt="ONE PIECE FILM GOLD" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/PSYCHO-PASS サイコパス 2.jpg" alt="PSYCHO-PASS サイコパス 2" width={thumbnailWidth} height={thumbnailHeight} /></li>
                            </ul>
                        </section>

                        <section class={styles.content}>
                            <h2 class={styles.secTitle}>オススメ！</h2>
                            <ul class={styles.horizontalList}>
                                <li class={styles.item}><Thumbnail src="/image/sample/3D彼女 リアルガール.jpg" alt="3D彼女 リアルガール" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/Another.jpg" alt="Anothe" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/BLEACH「Memories in the Rain」.jpg" alt="BLEACH「Memories in the Rain」" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/D.C. ～ダ・カーポ～.jpg" alt="D.C. ～ダ・カーポ～" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/ONE PIECE FILM GOLD.jpg" alt="ONE PIECE FILM GOLD" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/PSYCHO-PASS サイコパス 2.jpg" alt="PSYCHO-PASS サイコパス 2" width={thumbnailWidth} height={thumbnailHeight} /></li>
                            </ul>
                        </section>

                        <section class={styles.content}>
                            <h2 class={styles.secTitle}>人気上昇中！</h2>
                            <ul class={styles.horizontalList}>
                                <li class={styles.item}><Thumbnail src="/image/sample/3D彼女 リアルガール.jpg" alt="3D彼女 リアルガール" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/Another.jpg" alt="Anothe" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/BLEACH「Memories in the Rain」.jpg" alt="BLEACH「Memories in the Rain」" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/D.C. ～ダ・カーポ～.jpg" alt="D.C. ～ダ・カーポ～" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/ONE PIECE FILM GOLD.jpg" alt="ONE PIECE FILM GOLD" width={thumbnailWidth} height={thumbnailHeight} /></li>
                                <li class={styles.item}><Thumbnail src="/image/sample/PSYCHO-PASS サイコパス 2.jpg" alt="PSYCHO-PASS サイコパス 2" width={thumbnailWidth} height={thumbnailHeight} /></li>
                            </ul>
                        </section>
                    </div>

                </div>
            </main>
        </>
    )
}
