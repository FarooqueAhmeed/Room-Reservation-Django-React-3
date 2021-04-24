import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

export default function Services() {


  
  const serviceList = [
    {
     
      title: "Free Cocktail",
      details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up",
    },
    {
   
      title: "Free Beer",
      details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up",
    },
    {
    
      title: "Free Shuttle Van",
      details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up",
    },
    {
     
      title: "Free Hiking",
      details:
        "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up",
    },
  ];

  return (
    <React.Fragment>


      <Title title="Services" /> 
      <div className="row services align-items-center justify-content my-2">
        {serviceList.map((service, index) => 
          <ServiceCard
          service={service.serviceName}
          title={service.title}
          details={service.details}
          key={index}
        />
        )}
      </div>



    </React.Fragment>
  );
}
