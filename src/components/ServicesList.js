import React from "react";
import { List } from 'antd';


const ServicesList = ({services, handleActive}) => {
    return (
        <List
            size="small"
            bordered
            dataSource={services}
            renderItem={item => 
                            <List.Item 
                                onClick={() => handleActive(item.name)} 
                                key={item.name}
                            >
                                {item.name}&nbsp;
                                {item.rndValue}
                            </List.Item>
                        }
        />
    )
}

export default ServicesList;