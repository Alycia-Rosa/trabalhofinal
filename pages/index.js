import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Base from '../components/Base';
import Topo from '../components/Topo';


export default function Home() {
  return (
    <div className={styles.container}>

      
      <Head>
        <title>Trabalho Final</title>       
      </Head>
      
      <Topo/>
     
      <h1 className={styles.h1}> Loja Lycinha </h1>
      <a href="\products" className={styles.a}> Confira aqui nossos produtos! </a>     

      <Base/>
     
    </div>
  )
}
