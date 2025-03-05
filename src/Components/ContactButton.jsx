import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaUser, FaPhone, FaEnvelope, FaCar} from "react-icons/fa";

Modal.setAppElement("#root");

export default function ContactButton({vehicles, vehicleId}) {
    const [vehicle, setVehicle] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

        useEffect(() => {
            if (vehicles && vehicles.length > 0) {
                const selectedVehicle = vehicles.find((v) => v.id === vehicleId);
                setVehicle(selectedVehicle);
            }
        }, [vehicles, vehicleId]);

        if (!vehicle || !vehicle.images || vehicle.images.length === 0) {
            return <p>Informações não disponíveis.</p>;
          }

    return (
        <>
        <button className="btn btn-outline-primary btn-contact mt-2" onClick={() => setIsModalOpen(true)}>Contato</button> 

            <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Informações de Contato"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>Informações de Contato</h2>
            {vehicles ? (
                <ul>
                    <li><strong><FaCar title="Modelo" alt="Icone de Carro"/></strong> {vehicle.model}</li>
                    <li><strong><FaUser title="Nome" alt="Icone de Usuario"/></strong> {vehicle.contact[0]}</li>
                    <li><strong><FaPhone title="Email" alt="Icone de Envelope de email"/></strong> {vehicle.contact[1]}</li>
                    <li><strong><FaEnvelope title="Telefone" alt="Icone de Telefone"/></strong> {vehicle.contact[2]}</li>
                    <li><p>Visite em<a href="http://icarros.com.br" className="link" target="_blank"> iCarros</a></p></li>
                </ul>
            ) : (
                <p>Carregando informações...</p>
            )}
        <button className="btn btn-outline-primary btn-contact mt-2" onClick={() => setIsModalOpen(false)}>Fechar</button>
    </Modal>
    </>
    )
}