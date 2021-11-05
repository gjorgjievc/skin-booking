import React, { useEffect, useState } from 'react';
import TreatmentCard from './TreatmentCard';

const Treatments = ({ treatments, select, notOnline }) => {
    const [inClinic, setInClinic] = useState(true)
    // const [ hideOnline, setHideOnline ] = useState(false)

    console.log(notOnline)

    return (
        <div>
            <div>
                { notOnline ?
                    
                    <>
                        <div onClick={() => setInClinic(true) }>In Clinic</div>
                        <div onClick={() => setInClinic(false)}>Virtual</div>
                    </>
                :
                <div onClick={() => setInClinic(true) }>In Clinic</div>
                }

            </div>
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