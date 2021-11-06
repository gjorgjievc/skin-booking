import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';

const Treatments = ({ treatments, select, hideOnline }) => {
    const [inClinic, setInClinic] = useState(true)
    // const [ hideOnline, setHideOnline ] = useState(false)

    console.log(hideOnline)

    return (
        <div>
            
                { hideOnline ?
                        <div className="one-button">
                            <div onClick={() => setInClinic(true) }>In Clinic</div>
                        </div>
                    :
                        <div className="two-buttons">
                            <div onClick={() => setInClinic(true) }>In Clinic</div>
                            <div onClick={() => setInClinic(false)}>Virtual</div>
                        </div>
                }

            
            {  inClinic &&
                treatments.map(t => {
                    
                    if(t.online === false || t.online === undefined)
                    return (
                    <TreatmentCard 
                        name={t.name}
                        rating={t.rating}
                        review={t.review}
                        time={t.time}
                        price={t.price}
                        online={t.online}
                        select={select}
                    />
                    )

                })
            }
            {
                !inClinic && 
                treatments.map(t => {
                    if(t.online === true )
                    return (
                    <TreatmentCard 
                        name={t.name}
                        rating={t.rating}
                        review={t.review}
                        time={t.time}
                        price={t.price}
                        online={t.online}
                        select={select}
                    />
                    )

                })
            }
        </div>
    )
}

export default Treatments;