import { Link } from 'react-router-dom';
import style from './LinkButton.module.css';

function LinkButton({to, text}) // basicamente eu to passando pra onde vai e o texto que estará no botão, genial!!
{
    return(
        <Link to={to} className={style.btn}>
            {text}
        </Link>
    )
}

export default LinkButton;