import React, { useState, useEffect } from "react";
// import Modal from "react-responsive-modal";

export default function DisplayContainer() {
    const [vehicles, setVehicles] = useState([]);
    // const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const vehicles = [
            {
                id: 0,
                image: "/src/assets/images/porsche.png",
                brand: "Porsche",
                model: "Porsche 911",
                color: 'Branco',
                price: "R$ 76.000,00",
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 0,
                image: "/src/assets/images/ferrari.png",
                brand: "Ferrari",
                model: "Ferrari LaFerrari",
                color: 'Vermelho',
                price: "R$ 76.000,00",
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 0,
                image: "/src/assets/images/hrv.png",
                brand: "Hyundai",
                model: "Hyundai HRV",
                color: 'Branco',
                price: "R$ 186.000,00",
                description: "Hyundai HRV 2.0 Comfort Automatic",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 0,
                image: "/src/assets/images/creta.png",
                brand: "Hyundai",
                model: "Hyundai Creta",
                color: 'Verde militar claro',
                price: "R$ 76.000,00",
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 0,
                image: "/src/assets/images/hb20.png",
                brand: "Hyundai",
                model: "Hyundai HB20",
                color: 'Preto',
                price: "R$ 76.000,00",
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
        ];
    
        setVehicles(vehicles);
    }, [vehicles]); 

return (
            <container className="card-overlay">
              <div className="content-display">
                <h4 className="card-title">
                  Teste Itaú - iCarros
                </h4>
                <div className="card-vehicles col-md-12 col-sm-12">
                  {vehicles.map((data) => (
                    <div
                      key={data.id}
                      className="vehicles-card col-md-3 col-sm-3"
                      onClick={() => window.location.href=`${data.image}`}
                      >
                        
                    <a href={data.image} target="_blank" rel="noopener noreferrer" className="pt-2">
                      <img src={data.image}
                      className="vehicle-image"
                       alt={`imagem do veículo ${data.description} cor ${data.color}`}></img>
                    </a>
                    <h6 className="mt-3">{data.model}</h6>
                    <h5 className="mt-2">{data.description}</h5>
                    <h8 className="mt-2">{data.price}</h8>
                    <p className="data-info">{data.information.join("\n")}</p>
                      <button className="btn btn-outline-primary btn-contact mt-2">Contato</button> 
                    </div>
                  ))}
                </div>
              </div>
            </container>
        );
    }
    
