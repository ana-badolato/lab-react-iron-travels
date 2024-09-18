import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div>
      
      {travelPlansData.map((eachElement, index) => (
        <div className="page" key={index}>
          <div  className="container">
            <div className="img">
              <img className="city" src={eachElement.image} alt="" />
            </div>
          
            <div className="content">
              <h3>{eachElement.destination} <span> ({eachElement.days} days)</span></h3>
              <p>{eachElement.description}</p>
              <p><strong>Price: </strong>{eachElement.totalCost} €</p>
              <div className="labels">
              {eachElement.totalCost >= 1500 ? <label>Premium</label> : null }
              {eachElement.totalCost <= 350 ? <label className="deal">Great Deal</label> : null }
              {eachElement.totalCost >= 1500? <label>All-inclusive</label> : null }
              </div>
      
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
