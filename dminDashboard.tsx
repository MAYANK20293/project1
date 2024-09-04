import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const AdminDashboard: React.FC = () => {
    const [availabilities, setAvailabilities] = useState([]);

    useEffect(() => {
        const fetchAvailabilities = async () => {
            try {
                const response = await axios.get('http://localhost:5000/availabilities');
                setAvailabilities(response.data);
            } catch (error) {
                console.error('Failed to fetch availabilities', error);
            }
        };

        fetchAvailabilities();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {availabilities.map((availability: any) => (
                    <li key={availability._id}>
                        {availability.day}: {availability.start} - {availability.end}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
