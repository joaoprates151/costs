import {useNavigate} from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import style from './NewProject.module.css';
function NewProject()
{

    const history = useNavigate();

    function cratePost(project)
    {

    }

    return(
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject;