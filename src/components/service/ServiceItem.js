import Service from "./Service"
function ServiceItem(props){
  //
return(
<div className="col-4">
                <div className="service-box">
                  <div className="service-icon">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{props.serviceTitle}</h3>
                    <p className="service-info">
                     {props.serviceInfo}
                    </p>
                  </div>
                </div>
              </div>
)
}
export default ServiceItem