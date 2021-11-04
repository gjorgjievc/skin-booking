import React, { useEffect, useState } from "react";
import { defaultItems } from "../api/data";
import { Row, Col } from "antd";
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';


import SingleService from "./SingleService";
import ServicesList from "./ServicesList";
import Treatments from './Treatments';


const Services = () => {
    const [list, setList] = useState([]);
    const [ active, setActive ] = useState('Botox')
    const [ subCategory, setSubCategory ] = useState([]);

    useEffect(() => {
        handleAll()
        handleActive(active)
        console.log(active)
    },[])

    const handleList = (serviceName, firstCategory) => {
        const arr = []
        const array = []
        console.log(firstCategory)
        defaultItems.filter(service => {
            if(service.name === serviceName) {
                console.log(service)
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
               
                }))
            }
        }
        )
        setList(arr)
        console.log(arr.key)
        handleActive(firstCategory)
        // setActive(serviceName)
    
    }

    const handleAll = () => {
        const arr = []
        const array = []

        defaultItems.map(service => {
            return (
                service.category.map(n => arr.push({
                    name: n.name,
                    rndValue: n.rdmValue,
                    })   
                )
            )
        })
        setList(arr)
        setActive()
        handleActive('Botox')
    }

    const handleActive = (category) => {
        const arr = []
        defaultItems.filter(cat => {
            // if(active === cat.name){
                cat.category.map(c => {
                    if(category == c.name){
                        c.subCategory.map(subc => {
                            arr.push(subc)
                        })

                    }
                })
            // }    
        })
        // console.log('auf', category)
        setSubCategory(arr)
        setActive(category) 
    }
    
    // const handleSelect = () => {

    // }

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Row justify="space-between" align="middle" style={{display: "flex", border: "1px solid", width: '600px'}}>
                    <Col span={3} onClick={() => handleAll()}> 
                        <SingleService icon={AppstoreOutlined} serviceName="All" /> 
                    </Col>
                {
                    defaultItems.map(service => 
                        <Col span={3} onClick={() => handleList(service.name, service.category[0].name)}>
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
                <ServicesList services={list} handleActive={handleActive}/>
                <Treatments treatments={subCategory} />
            </div>
         </>
    )
}

export default Services;