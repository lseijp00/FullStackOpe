import './index.css'
export function Statistic ({ text, value }) {
  return (
    <div className='item__stat'>
      <p>{text}</p>
      <p>{value}</p>
    </div>
  )
}
