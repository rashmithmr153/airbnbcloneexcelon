
function PropertyCard({ property,handleClick }){
    return(
        <div className="propertyCard" onClick={handleClick}>
        <img src={property.coverImage} alt={property.title} />
        <div className="content">
        <h3  className="title">{property.title}</h3>
        <p>Location: {property.location}</p>
        <p>Price: <strong>${property.price}</strong>/night</p>
        <p>Rating: {property.rating}⭐</p>
        </div>
        </div>
    )
}
export default PropertyCard