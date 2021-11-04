import { defaultItems } from "../api/data"

const TreatmentCard = ({
    name,
    rating,
    review,
    time,
    price,
    online
}) => {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid'}}>
            <div>
            {name} &nbsp; <span>${price}</span>
            </div>
            <div>
                {time}mins
            </div>
            <div>
            &#9733;{rating} | {review} reviews
            </div>
        </div>
    )
}

export default TreatmentCard;