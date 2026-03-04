import PropertyCard from "./PropertyCards";
function PropertyGrid({properties,onCardClick}){
    return(
            <div className="propertyGrid">{
        properties.map((property)=>(
            <PropertyCard key={property.id} property={property} handleClick={() => onCardClick(property)}/>
            ))}
            </div>

    )
}
export default PropertyGrid