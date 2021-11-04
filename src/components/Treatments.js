import React from 'react';
import TreatmentCard from './TreatmentCard';

const Treatments = ({ treatments }) => {
    console.log(treatments)
    return (
        <div>
            {
                treatments.map(t => (
                    <TreatmentCard 
                        name={t.name}
                        rating={t.rating}
                        review={t.review}
                        time={t.time}
                        price={t.price}
                        online={t.online}
                    />

                ))
            }
        </div>
    )
}

export default Treatments;