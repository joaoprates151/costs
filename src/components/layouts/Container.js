import styles from './Container.module.css';

function Container(props)
{
    return(
        // essa props.children é necessária para o react saber onde tem que encaixar o conteúdo
        // essa customClass só é enviada quando necessário, fazendo assim podemos criar layouts dinâmicos
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div> 
    )
}

export default Container;