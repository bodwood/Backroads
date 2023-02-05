import Title from "./Title"
import { services } from "../data"

const Services = () => {
  return (
    <section className='section services' id='services'>
     <Title title='our' subtitle='services'/>
      <div className='section-center services-center'>
        {services.map((service) => {
          const {id, icon, serviceH4, serviceP} = service;
          return(
          <article key={id} className='service'>
            <span className='service-icon'>
              <i className={icon}></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>{serviceH4}</h4>
              <p className='service-text'>{serviceP}</p>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services