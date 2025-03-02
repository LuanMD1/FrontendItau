import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
// import Modal from "react-responsive-modal";

export default function DisplayContainer() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const vehicles = [
            {
                id: 0,
                image: "/src/assets/images/porsche.png",
                brand: "Porsche",
                model: "Porsche 911",
                color: 'Branco',
                price: "R$ 76.000,00",
                isFavorite: false,
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 1,
                image: "/src/assets/images/ferrari.png",
                brand: "Ferrari",
                model: "Ferrari LaFerrari",
                color: 'Vermelho',
                price: "R$ 76.000,00",
                isFavorite: false,
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 2,
                image: "/src/assets/images/hrv.png",
                brand: "Hyundai",
                model: "Hyundai HRV",
                color: 'Branco',
                price: "R$ 186.000,00",
                isFavorite: false,
                description: "Hyundai HRV 2.0 Comfort Automatic",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 3,
                image: "/src/assets/images/creta.png",
                brand: "Hyundai",
                model: "Hyundai Creta",
                color: 'Verde militar claro',
                price: "R$ 76.000,00",
                isFavorite: false,
                description: "Hyundai HB20 1.0 Comfort manual",
                information: [
                    "Localiza Seminovos",
                    "São Paulo, SP",
                    "2021-2022",
                    "48.785 Km",
                ],
            },
            {
                id: 4,
                image: "/src/assets/images/hb20.png",
                brand: "Hyundai",
                model: "Hyundai HB20",
                color: 'Preto',
                price: "R$ 76.000,00",
                isFavorite: true,
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
    }, []); 

    function toggleFavorite(id) {
      setVehicles((prevVehicles) =>
          prevVehicles.map((vehicle) => {
              if (vehicle.id === id) {
                  if (!vehicle.isFavorite) {
                      toast.success("Veículo favoritado!");
                  }
                  return { ...vehicle, isFavorite: !vehicle.isFavorite };
              }
              return vehicle;
          })
      );
  }

    return (
            <section className="card-overlay">
              <div className="content-display">
                <h4 className="card-title">
                  Teste Itaú iCarros
                  <SearchBar />
                </h4>
                <div className="card-vehicles col-md-12 col-sm-12">
                  {vehicles.map((data) => (
                    <div
                      key={data.id}
                      className="vehicles-card col-md-3 col-sm-3"
                      >
                        
                    <a href={data.image} className="pt-2">
                      <img src={data.image}
                      className="vehicle-image"
                       alt={`imagem do veículo ${data.description} cor ${data.color}`}></img>
                    </a>
                    <div className="toggle-fav-icon" >
                      <FaHeart title={ "Marcar como favorito "} style={{ color: data.isFavorite ? "red" : "grey", cursor: "pointer"}}
                      onClick={() => toggleFavorite(data.id)} />
                    </div>
                    <h6 className="mt-3">{data.model}</h6>
                    <h5 className="mt-2">{data.description}</h5>
                    <h6 className="mt-2">{data.price}</h6>
                    <p className="data-info">{data.information.join("\n")}</p>
                      <button className="btn btn-outline-primary btn-contact mt-2">Contato</button> 
                    </div>
                  ))}
                </div>
              </div>
              <ToastContainer />
            </section>
        );
    }
    
