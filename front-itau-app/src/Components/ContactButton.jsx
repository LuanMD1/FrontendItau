import React, { useState } from "react";
import Modal from "react-modal";
import { toast } from 'react-toastify';
import { FaUser, FaPhone, FaEnvelope, FaCar} from "react-icons/fa";

Modal.setAppElement("#root");

export default function ContactButton({vehicleId}) {

    const [vehicleInfo, setVehicleInfo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchVehicleInfo = async () => {
        try {
            const response = await fetch("/vehicles.json");
            const data = await response.json();

            const selectedVehicle  = data.find((v) => v.id === vehicleId);
            if (selectedVehicle  && selectedVehicle .contact) {
                setVehicleInfo(selectedVehicle);
                setIsModalOpen(true); 
            } else {
                toast.error("Contato não encontrado.");
            }
        } catch (error) {
            toast.error(error, "Erro ao carregar informações do contato.");
        }
    };

    return (
        <>
        <button className="btn btn-outline-primary btn-contact mt-2" onClick={fetchVehicleInfo}>Contato</button> 

            <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Informações de Contato"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>Informações de Contato</h2>
            {vehicleInfo ? (
                <ul>
                    <li><strong><FaCar title="Modelo" alt="Icone de Carro"/></strong> {vehicleInfo.model}</li>
                    <li><strong><FaUser title="Nome" alt="Icone de Usuario"/></strong> {vehicleInfo.contact[0]}</li>
                    <li><strong><FaEnvelope title="Email" alt="Icone de Envelope de email"/></strong> {vehicleInfo.contact[1]}</li>
                    <li><strong><FaPhone title="Telefone" alt="Icone de Telefone"/></strong> {vehicleInfo.contact[2]}</li>
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