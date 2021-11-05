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
    const [ selected, setSelected ] = useState([])
    const [ notOnline, setNotOnline ] = useState([])
    
    useEffect(() => {
        handleAll()
        handleActive(active)
    },[])

    // hendlaj klik na Master Kategorija
    const handleList = (serviceName, firstCategory) => {
        const arr = []
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
        handleActive(firstCategory)
    }

    // hendlaj klik na All (master kategorija )
    const handleAll = () => {
        const arr = []
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
        // setActive()
        handleActive('Botox')
    }

    // hendlaj aktivna kategorija i zacuvaj podatoci vo niza
    const handleActive = (category) => {
        const arr = []
        defaultItems.filter(cat => {
                cat.category.map(c => {
                    if(category == c.name){
                        c.subCategory.map(subc => {
                            arr.push(subc)
                            
                        })

                    }
                    // vidi dali ima onlajn parametar? vo subCategorijata (ova treba rabota ama nemozam krajot da mu go najdam)
                    if(c.subCategory[0].online === undefined){
                        setNotOnline(true)
                        console.log('eve go', notOnline)
                    }   
                }
                )
        })
        setSubCategory(arr)
        setActive(category) 
    }
    
    // Hendlaj gi tretmanite sho se selektirani i cuvaj gi vo stejt
    const handleSelect = (treatmentName) => {
        
        if(selected.length === 0) {
            setSelected([treatmentName])
        } else {
            selected.map(s => {
                if(selected.includes(treatmentName)){
                    setSelected(selected.filter(t => t !== treatmentName))
                } else {
                    setSelected([...selected, treatmentName])
                }
            })
        }
    }
    console.log(selected)
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
                {/* {
                    treatments.map(t => {
                        <Treatments t
                    })
                } */}
                <Treatments treatments={subCategory} select={handleSelect} notOnline={notOnline} />
            </div>
         </>
    )
}

export default Services;