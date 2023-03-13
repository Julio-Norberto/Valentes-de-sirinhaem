import './bar.css'

type BarProps = {
  title: string
}

export const Bar: React.FunctionComponent<BarProps> = ({title}: BarProps) => {
  return (
    <div className='bar-container'>
      <h1> {title} </h1>
    </div>
  )
}
