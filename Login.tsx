import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Availability: React.FC = () => {
    const [availability, setAvailability] = useState({ day: '', start: '', end: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/availability', availability);
            alert('Availability submitted!');
        } catch (error) {
            console.error('Submission failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Day:</label>
            <input
                type="text"
                value={availability.day}
                onChange={(e) => setAvailability({ ...availability, day: e.target.value })}
                required
            />

            <label>Start Time:</label>
            <input
                type="time"
                value={availability.start}
                onChange={(e) => setAvailability({ ...availability, start: e.target.value })}
                required
            />

            <label>End Time:</label>
            <input
                type="time"
                value={availability.end}
                onChange={(e) => setAvailability({ ...availability, end: e.target.value })}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Availability;
