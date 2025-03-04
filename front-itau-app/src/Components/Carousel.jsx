import React, { useEffect, useState } from "react";

export default function ImageCarousel({ vehicles, vehicleId }) {
        const [vehicle, setVehicle] = useState(null);

        useEffect(() => {
            if (vehicles && vehicles.length > 0) {
                const selectedVehicle = vehicles.find((v) => v.id === vehicleId);
                setVehicle(selectedVehicle);
            }
        }, [vehicles, vehicleId]);

      if (!vehicle || !vehicle.images || vehicle.images.length === 0) {
        return <p>Imagens não disponíveis.</p>;
      }

      return (
        <div id={`carousel-${vehicle.id}`} className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                {vehicle.images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={`#carousel-${vehicle.id}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner">               
                {vehicle.images.map((image, index) => (                  
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image} className="d-block w-100 vehicle-image" alt={`Imagem ${index + 1} do veículo`} />
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${vehicle.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${vehicle.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}