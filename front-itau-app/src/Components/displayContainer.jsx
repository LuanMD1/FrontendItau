import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { ToastContainer, toast } from 'react-toastify';
import ContactButton from "./ContactButton";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";
import FavoriteButton from "./FavoriteButton";

export default function DisplayContainer() {
    const [vehicles, setVehicles] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
      fetch("/vehicles.json")
          .then((response) => response.json())
          .then((data) => setVehicles(data))
          .catch((error) => toast.error("Erro ao carregar veículos", error));
  }, []);

    const handleSearch = (searchInput) => {
        setSearchItem(searchInput);
    };

    const filteredVehicles = vehicles.filter((vehicle) =>
        vehicle.model.toLowerCase().includes(searchItem.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchItem.toLowerCase())    
      );

    return (
            <section className="card-overlay">
              <div className="content-display">
                <header>
                  <a className="icon" href="/">
                    <p>iCarros</p>
                  </a>
                  <SearchBar onSearch={handleSearch} />
                </header>

                <div className="vehicles-view-section mt-2">
                {filteredVehicles.length > 0 ? (
                  filteredVehicles.map((data) => (
                    <div key={data.id} className="vehicles-card"
                      >
                    <ImageCarousel vehicles={vehicles} vehicleId={data.id}/>

                    <div className="toggle-fav-icon" >
                      <h6 className="car-model">{data.model}</h6>
                      <FavoriteButton vehicleId={data.id}/>
                    </div> 

                    <h5 className="mt-4">{data.description}</h5>
                      <hr/>
                    <h6 className="mt-4">{data.price}</h6>
                    <p className="data-info">{data.information.join(", ")}</p>
                      <ContactButton vehicleId={data.id} />
                    </div>
                    ))
                 ) : (
                  <div className="not-found-text">  
                    <p>Nenhum veículo encontrado</p>
                    <a className="icon" href="/">Voltar a página inicial</a>
                  </div>
                  )}
                </div>
                <Footer />
              </div>
              <ToastContainer />
              </section>            
      )
    }
    
