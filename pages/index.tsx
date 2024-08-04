import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Campaign, Pledge } from '../components/organisms'
import { WalletData } from '../components/molecules'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Crowdfund Template - An example of how to run a crowdfund campaign on
          Soroban.
        </title>
        <meta
          name="description"
          content="An example of loading information from a stellar smart contract"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h3>Starfund</h3>
        <WalletData />
      </header>
      <main className={styles.main}>
      <div className={styles.text}>
          <h1>Fundraising using a Soroban Template is easy, powerful, and trusted.</h1>
          <h2>Get what you need to help your fundraiser succeed on Soroban, whether you’re raising money for yourself, friends, family, or charity. With no fee to start, Soroban is the world’s leading onchain crowdfunding platform—from memorial tributes and funerals to medical emergencies and nonprofits. Whenever you need help, you can ask here.</h2>
        </div>

        <div className={styles.content}>
          <Campaign />
          <Pledge />
        </div>
        <div className={styles.text}>
          <h3>Still have questions? Learn more about how Soroban works.</h3>
          <p>Send us an email at <a href="/home"> support.soroban.psc</a></p>
        </div>
      </main>
    </>
  )
}

export default Home
