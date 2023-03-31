import './footer.css'

export const Footer:React.FunctionComponent = () => {
  return (
    <div className='footer-container'>
      <p className='valentes-footer'>Valentes de Sirinhaém 2023</p>
      <p style={{ fontSize: '10px' }} ><a href="https://www.freepik.com/free-vector/background-tamplate_33218325.htm#page=2&query=background vectors&position=34&from_view=search&track=robertav1">Image by nuart_design</a> on Freepik | <a href="https://www.freepik.com/free-vector/animal-shelter-concept-illustration_9319855.htm?query=pets&collectionId=498&page=2&position=14&from_view=collections">Image by storyset</a> on Freepik</p>
      <a style={{ marginTop: '8px', textDecoration: 'underline', fontSize: '12px' }} target='_blank' href="https://github.com/Julio-Norberto/Valentes-de-sirinhaem">Desenvolvedores</a>
    </div>
  )
}
