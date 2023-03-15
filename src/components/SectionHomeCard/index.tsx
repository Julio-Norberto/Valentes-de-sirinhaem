import { Button } from '../Button'
import './sectionHomeCard.css'

interface ISectionHomeCard {
  image: any
  title: string
  description: string
  buttonTitle: string
  direction?: string
  width?: string
  display?: string
  align?: string
  titleAlign?: 'center' | 'left'
  destiny: string
  left?: string
  right?: string
}

export const SectionHomeCard:React.FunctionComponent<ISectionHomeCard> = (props: ISectionHomeCard) => {
    const style: React.CSSProperties | any = {
      flexDirection: props.direction
    }

    const h2Style : React.CSSProperties = {
      textAlign: props.titleAlign
    }

    return (
      <div style={style} className='cardSection-container'>
        <div className='cardSection-image'>
          <img className='card-image' width={650} src={props.image} alt="" />
        </div>

        <div className='cardSection-text'>

          <div>
            <h2 style={h2Style}> {props.title} </h2>
            <p style={h2Style}> {props.description} </p>
          </div>

          <Button paddingLeft={props.left} paddingRight={props.right} destination={props.destiny} title={props.buttonTitle} display={props.display} width={props.width} align={props.align} />
        </div>
      </div>
    )
}
