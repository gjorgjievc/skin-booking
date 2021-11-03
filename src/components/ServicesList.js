import React from "react";
import { List } from 'antd';


const ServicesList = ({services}) => {
    console.log(services)
    return (
        <List
            size="small"
            bordered
            dataSource={services}
            renderItem={item => <List.Item key={item.name}>{item.name}</List.Item>}
        />
    )
}

export default ServicesList;