import React from 'react';
import ClientItem from './clientItem';
import { List, Table } from 'semantic-ui-react'

const clientList = ({clients}) => {
    console.log(clients)
    const clientsList = clients.map((client) => {
        return (<ClientItem client={client} key={client.name.first + client.name.last}/>);
    });

    return (
        <React.Fragment>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>Last</Table.HeaderCell>
                        <Table.HeaderCell>First</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {clientsList}
                </Table.Body>
            </Table>
        </React.Fragment>
    );
};

export default clientList;