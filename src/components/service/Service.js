import './Service.css'
import ServiceItem from './ServiceItem'


function Service(){
  let services =[
    {
      serviceIcon: '',
      serviceTitle:'WEB DESIGN',
      serviceInfo:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    },
    {
      serviceIcon: '',
      serviceTitle:'WEB DEVELOPMNT',
      serviceInfo:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    },
    {
      serviceIcon: '',
      serviceTitle:'PHOTOGRAPHY',
      serviceInfo:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnadipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    },
  ]
    return(
        <section id="services">
          <div className="container">
            <div className="section-info">
              <h2 className="section-title">SERVICES</h2>
              <p className="section-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
          <ServiceItem {...services[0]}/>
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
            </div>
          </div>
        </section>
    )
}
export default Service