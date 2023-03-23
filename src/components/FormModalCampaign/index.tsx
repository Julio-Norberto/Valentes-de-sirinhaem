import './formModalCampaign.css'

export const FormModalCampaign: React.FunctionComponent = () => {
  return (
    <div className='form-modal-container'>
      <div className='forms-pet'>
        <form action="">
          <div className='input-pet'>
            <label htmlFor="campaigntitle">Título da campanha:</label>
            <input type="text" name="campaigntitle" id="campaigntitle" placeholder='Cirurgia do Bob' />
          </div>

          <div className='input-pet'>
            <label htmlFor="campaign-description">Descrição:</label>
            <textarea
              className='text-area-modal'
              style={{ padding: '8px', borderRadius: '8px' }}
              placeholder="Bob precisa de uma cirurgia na patinha..."
              name="campaign-description"
              id="campaign-description"
              cols={30}
              rows={10}>
            </textarea>
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
