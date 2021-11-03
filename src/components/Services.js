import React, { useState } from "react";
import { defaultItems } from "../api/data";
import { Row, Col } from "antd";
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';


import SingleService from "./SingleService";
import ServicesList from "./ServicesList";


const Services = () => {
    const [list, setList] = useState([]);
    const [treatments, setTreatments] = useState([])

    const handleList = (serviceName) => {
        const arr = []
        const array = []

        defaultItems.filter(service => {
            if(service.name === serviceName) {
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
                    subC: n.subCategory.map(s => array.push({
                        name: s.name,
                        rating: s.rating,
                        time: s.time,
                        price: s.price,
                        reviews: s.review,
                        online: s.online  
                        })
                    )
                }))
            }
        })
        console.log('opa', array)
        setList(arr)
        setTreatments(array)
    }

    const handleAll = () => {
        const arr = []
        const array = []

        defaultItems.map(service => {
            return (
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
                    // if(n.active !== 'false'){
                    subC: (() => { 
                        if(n.active == 'true')
                            n.subCategory.map(s => array.push({
                                name: s.name,
                                rating: s.rating,
                                time: s.time,
                                price: s.price,
                                reviews: s.review,
                                online: s.online  
                                })
                            )
                    })
                })
            )
        )
        })
        console.log('ole', array)
        setList(arr)
        setTreatments(array)
        }

    // console.log(defaultItems)
    return(
        <>
            <div style={{display: 'flex',    justifyContent: 'center'}}>
                <Row justify="space-between" align="middle" style={{display: "flex", border: "1px solid", width: '600px'}}>
                    <Col span={3} onClick={() => handleAll()}> 
                        <SingleService icon={AppstoreOutlined} serviceName="All" /> 
                    </Col>
                {
                    defaultItems.map(service => 
                        <Col span={3} onClick={() => handleList(service.name)}>
                            <SingleService
                                 
                                key={service.key} 
                                icon={service.icon} 
                                serviceName={service.name} 
                            />  
                        </Col>
                    )
                }
                
                </Row>
            </div>
            <div style={{display: 'flex'}}>
                <ServicesList services={list} />
                <ServicesList services={treatments} />
            </div>
         </>
    )
}

export default Services;