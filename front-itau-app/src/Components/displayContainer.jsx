import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import ContactButton from "./ContactButton";
import Footer from "./Footer";

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
                <header>
                  <a className="icon" href="/">
                    <p>iCarros</p>
                  </a>
                  <SearchBar onSearch={handleSearch} />
                </header>

                <div className="vehicles-view-section">
                {filteredVehicles.length > 0 ? (
                  filteredVehicles.map((data) => (
                    <div key={data.id} className="vehicles-card"
                      >
                        
                    <a href={data.image}>
                      <img src={data.image}
                      className="vehicle-image"
                       alt={`imagem do veículo ${data.description} cor ${data.color}`}></img>
                    </a>

                    <div className="toggle-fav-icon" >
                      <FaHeart title={ "Marcar como favorito "} style={{ color: data.isFavorite ? "red" : "grey", cursor: "pointer"}}
                      onClick={() => toggleFavorite(data.id)} />
                    </div>

                    <h6 className="mt-2">{data.model}</h6>
                    <h5 className="mt-2">{data.description}</h5>
                      <hr/>
                    <h6 className="mt-2">{data.price}</h6>
                    <p className="data-info">{data.information.join(", ")}</p>
                      <ContactButton vehicleId={data.id} />
                    </div>
                    ))
                 ) : (
                  <div className="not-found-text">  
                    <p>Nenhum veículo encontrado</p>
                  </div>
                  )}
                </div>
                <Footer />
              </div>
              <ToastContainer />
              </section>            
      )
    }
    
