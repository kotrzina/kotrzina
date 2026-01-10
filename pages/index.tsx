import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Row} from "react-bootstrap";
import {Board} from "../components/Board";
import lpImg from "../images/lesempolem.webp"
import sdhImg from "../images/sdh.webp"
import hristeImg from "../images/hriste.webp"
import fotkyImg from "../images/fotky.webp"

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kotrřina Veselice</title>
                <meta name="description" content="Kotržina - sdružení "/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Row>
                    <Board
                        title={"Hřište ve Veselici"}
                        description={"Rezervační systém multifunkčního hřiště ve Veselici."}
                        linkTitle={"hriste.kotrzina.cz"}
                        linkHref={"https://hriste.kotrzina.cz/"}
                        image={hristeImg}
                    />

                    <Board
                        title={"Lesempolem"}
                        description={"Běžecké závody Lesempolem, které jsou pořádany od roku 2013."}
                        linkTitle={"lesempolem.cz"}
                        linkHref={"https://lesempolem.cz/"}
                        image={lpImg}
                    />

                    <Board
                        title={"SDH Veselice"}
                        description={"Oficiální webové stránky sboru dobrovolných hasičů z Veselice."}
                        linkTitle={"sdhveselice.cz"}
                        linkHref={"https://sdhveselice.cz//"}
                        image={sdhImg}
                    />

                    <Board
                        title={"Fotky"}
                        description={"Fotogalerie z akcí pořádaných ve Veselici."}
                        linkTitle={"fotky.kotrzina.cz"}
                        linkHref={"https://fotky.kotrzina.cz/"}
                        image={fotkyImg}
                    />
                </Row>
            </main>
        </div>
    )
}

export default Home
