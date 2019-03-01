import React from 'react';
import ClientItem from './clientItem';
import { List } from 'semantic-ui-react'

const clientList = ({clients}) => {
    console.log(clients)
    const clientsList = clients.results.map((client) => {
        return (<ClientItem client={client} key={client.name.first + client.name.last}/>);
    });

    return (
        <div>
            <List selection divided>
                {clientsList}
                
            </List>
            
        </div>
    );
};

export default clientList;