import { useWeb3React } from '@web3-react/core'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { connector } from '../config/web3'


export default function Home() {
  const {
    activate,
    active,
    deactivate,
    error,
    account,
    chainId

  } = useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)

  },[activate])

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true')
    connect()
    
  },[connect])

  

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Merkadapp</title>
        <meta name="description" content="Aplicación Merkadapp para interactuar con Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a  <a href="https://iaeloko.github.io">Merkadapp!</a>
        </h1>
          <h3 className={styles.h3}>Esta página fue creada para practicar despliegues web3. Saludos!</h3>

        
        
        <br>
        </br>

        

        

        <button onClick={connect}> Connect Wallet </button>
        

        
       


      </main>
    </div>  
  )
}
