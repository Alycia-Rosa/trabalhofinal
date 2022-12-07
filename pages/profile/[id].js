import axios from 'axios';
import styles from '../../styles/produtos.module.css'

function Profile({produto = {}}){
    return (<div className={styles.produto}>
            <p className={styles.nome}>{produto.title}</p>
            <p >{produto.price}</p>
            <p className={styles.imagem}><img src= {produto.image}></img></p>
        </div>)
}

export async function getStaticProps(context){
    const response = await axios.get (
        'https://fakestoreapi.com/products/' + context.params.id        
    );

    const produto = await response.data;
    return {
        props: {produto},
    }
}

export async function getStaticPaths() {
    const response = await axios.get (
        'https://fakestoreapi.com/products'
    );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}};
    });
    return {
        paths,
        fallback: true,
    };
} 
export default Profile;