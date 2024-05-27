import React, { useState } from 'react';
import propertyService from '../services/propertyService';

const PropertyForm = (props) => {
  const [formData, setFormData] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearbyAmenities: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await propertyService.createProperty({
        ...formData,
        nearbyAmenities: formData.nearbyAmenities.split(',').map(item => item.trim())
      });
      props.history.push('/seller/properties');
    } catch (error) {
      console.error('Property Form Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="area" value={formData.area} onChange={handleChange} placeholder="Area" required />
      <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
      <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
      <input type="text" name="nearbyAmenities" value={formData.nearbyAmenities} onChange={handleChange} placeholder="Nearby Amenities (comma separated)" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
