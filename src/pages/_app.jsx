import React, { Fragment } from 'react'
import Head from '../components/head/head'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head/>
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
