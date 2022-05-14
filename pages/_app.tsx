import type {AppProps} from 'next/app'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    )
}

export default MyApp
