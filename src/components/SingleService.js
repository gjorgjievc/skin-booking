import React from "react";
import { Card } from 'antd';
const { Meta } = Card;

const SingleService = ({serviceName, icon}) => {
    return (
        <div style={{ cursor: 'pointer'}} onClick={() => console.log('ole')}>
            <div>
                <img src={icon} alt=""/>
            </div>
            <div>
                <span>{serviceName}</span>
            </div>
        </div>
    )
}
export default SingleService;   