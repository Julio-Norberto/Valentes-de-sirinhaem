import './formModal.css'

export const Form: React.FunctionComponent = () => {
    return (
        <form className='form'>

            <div className='input_container'>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' placeholder='Título da tarefa' />
            </div>

            <div className='input_container'>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value='Enviar' />

        </form>
    )
}
