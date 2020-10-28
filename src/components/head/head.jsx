import React from 'react'
import Head from 'next/head'

const head = () => {
    return (
        <Head>
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Nextjs with PWA' />
            <meta name='keywords' content='PWA' />
            <title>Next.js with PWA</title>

            <link rel="manifest" href="/manifest.json" />
            <link href='/icons/icons.png' rel='icon' type='image/png' sizes='512x512' />
            <link rel="apple-touch-icon" href="/icons/icons.png"></link>
            <meta name="theme-color" content="#000000"/>
        </Head>
    )
}

export default head
