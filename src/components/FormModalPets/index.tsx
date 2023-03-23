import './formModalPets.css'

export const FormModalPets: React.FunctionComponent = () => {
  return (
    <div className='form-modal-container'>
      <div className='forms-pet'>
        <form action="">
          <div className='input-pet'>
            <label htmlFor="petname">Nome do pet:</label>
            <input type="text" name="petname" id="petname" placeholder='Sansão' />
          </div>

          <div className='input-pet'>
            <label htmlFor="petage">Idade:</label>
            <input type="text" name="petage" id="petage" placeholder='2' />
          </div>

          <div className='input-pet'>
            <label htmlFor="petrace">Raça:</label>
            <input type="text" name="petrace" id="petrace" placeholder='Sansão' />
          </div>

          <div className='input-pet'>
            <label htmlFor="weird">Peso (kg):</label>
            <input type="text" name="weird" id="weird" placeholder='4' />
          </div>

          <div className='btn-div'>
            <a href="#" className='btn-pet-modal'>Enviar imagem</a>
          </div>

          <input className='btn-submit' type="submit" value='Editar pet' />
        </form>
      </div>
    </div>
  )
}
