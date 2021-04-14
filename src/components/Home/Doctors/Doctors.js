import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://shrouded-wildwood-98875.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors{doctors.length} </h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id}></Doctor> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;