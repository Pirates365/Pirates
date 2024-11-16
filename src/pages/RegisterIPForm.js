import React, { useState } from 'react';

function RegisterIPForm() {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registering IP:', { description, type });
    // Add your submit logic here, such as an API call
  };

  return (
    <div className="register-ip-form" style={{ margin: '2rem', display: 'flex', justifyContent: 'space-between' }}>
      <form onSubmit={handleSubmit} style={{ width: '40%' }}>
        <h2>Register IP</h2>
        <div>
          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              style={{ display: 'block', width: '100%', margin: '8px 0' }}
            />
          </label>
        </div>
        <div>
          <label>
            Type
            <input
              type="text"
              value={type}
              onChange={e => setType(e.target.value)}
              required
              style={{ display: 'block', width: '100%', margin: '8px 0' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '12px' }}>Register</button>
      </form>
      <div style={{ border: '1px dashed gray', width: '55%', padding: '1rem', textAlign: 'center' }}>
        <p>Select a file or drag and drop here</p>
        <p style={{ color: 'gray' }}>PNG, JPG, GIF up to 10MB</p>
        <button>UPLOAD FILE</button>
      </div>
    </div>
  );
}

export default RegisterIPForm;
