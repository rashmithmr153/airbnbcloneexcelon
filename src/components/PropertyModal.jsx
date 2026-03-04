import { useRef,useState,useEffect } from "react";


function PropertyModal({ property, onClose }) {
const closeBtnRef = useRef(null);

  // Focus on close button
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);


 
  const [activeImage, setActiveImage] = useState(0);


if ( !property) return null;
  return (
    
   <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>✕</button>
        <div className="modalBody">
            <div className="modalImages">
                <img
                src={property.images?.[activeImage] || property.images?.[0]}
                alt={`${property.title} ${activeImage}`}
                className="modal-main-image"
                />
                <div className="modal-thumbnails">
                    {property.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${property.title} ${idx}`}
                        onClick={() =>{ 
                            // console.log("Clicked thumbnail:", idx);
                            setActiveImage(idx)}}
                        className={activeImage === idx ? "active" : ""}
                    />
                    ))}
                </div>
            </div>
            <div className="modalDetails">
                <h2 className="modal-title">{property.title}</h2>
                <p className="modal-location">{property.location}</p>
                <p className="modal-rating">⭐ {property.rating}</p>
                <p className="modal-description">{property.description}</p>
                <div className="modal-amenities">
                    {property.amenities.map((a) => (
                        <span key={a} className="amenity">{a}</span>
                    ))}
                </div>

                <div className="modal-price">
                    <strong>${property.price}</strong> / night
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;