export const WhatsAppIcon = () => {
    const whatsappLink =
        'https://wa.me/+5218123800853?text=Hola%2C%20estoy%20buscando%20informaci%C3%B3n%20sobre%20el%20cr%C3%A9dito%20Mejoravit.%20%C2%BFPuedes%20darme%20m%C3%A1s%20detalles%3F';

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-button"
            aria-label="Haz click para chatear con un agente por WhatsApp"
            data-link="whatsapp-btn"
        >
            <span className="whatsapp-text bold-text">WhatsApp</span>
        </button>
    );
};
