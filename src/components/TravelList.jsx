import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

  const [travelArr, setTravel] = useState(travelPlansData);

  const handleDelete = (index) => {
    const clone = travelArr.slice(0);  // Crea una copia de travelArr
    clone.splice(index, 1);            // Elimina un elemento en el índice especificado
    setTravel(clone);                  // Actualiza el estado con el nuevo array
  }


  return (
    <div>
      {travelArr.map((eachElement, index) => (
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
            <button onClick={() => handleDelete(index)}>Borrar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
