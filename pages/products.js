import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/products.module.css'


function Produtos ({produtos}){
    return (
        <div>
            <h1 className={styles.h1}>Lista de Produtos</h1>
            {produtos.map((produto) => (
                <div> 
                    <Link href='/profile/[id]'as={`/profile/${produto.id}`}>
                        <p className={styles.p}>{produto.title}</p>
                    </Link>         
                             
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    )
    const data = await response.data;
    return {
        props: {produtos:data},
    }
}

export default Produtos;