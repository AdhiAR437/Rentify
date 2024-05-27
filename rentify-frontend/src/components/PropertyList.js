import React, { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await propertyService.getAllProperties();
        setProperties(response.data);
      } catch (error) {
        console.error('Property List Error:', error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          <h3>{property.area} sqft</h3>
          <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
          <p>Nearby Amenities: {property.nearbyAmenities.join(', ')}</p>
          <button onClick={() => alert(`Contact Seller: ${property.seller.email}`)}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
