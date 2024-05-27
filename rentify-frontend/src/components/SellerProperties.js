import React, { useEffect, useState } from 'react';
import propertyService from '../services/propertyService';

const SellerProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchSellerProperties = async () => {
      try {
        const response = await propertyService.getPropertiesBySeller();
        setProperties(response.data);
      } catch (error) {
        console.error('Seller Properties Error:', error);
      }
    };
    fetchSellerProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await propertyService.deleteProperty(id);
      setProperties(properties.filter(property => property._id !== id));
    } catch (error) {
      console.error('Delete Property Error:', error);
    }
  };

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          <h3>{property.area} sqft</h3>
          <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
          <p>Nearby Amenities: {property.nearbyAmenities.join(', ')}</p>
          <button onClick={() => handleDelete(property._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SellerProperties;
