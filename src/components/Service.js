const Service = ({icon, serviceH4, serviceP }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{serviceH4}</h4>
        <p className='service-text'>{serviceP}</p>
      </div>
    </article>
  )
}
export default Service