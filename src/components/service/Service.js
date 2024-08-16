import './Service.css'
import ServiceItem from './ServiceItem'
function Service(){
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
          <ServiceItem />
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