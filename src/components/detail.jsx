import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Image, Grid, Divider, Segment, Table } from 'semantic-ui-react';

const Details = ({client}) => {
    if (!client) {
        return <Header>Not found</Header>
    }

    return (
        <Table.Row>
        <Grid columns={2}>
            
            <Grid.Column width={4}>
                <Image circular size="small" src={client.picture.large} alt=""/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Item>
                    <Item.Header as="h2">{client.name.first}</Item.Header>
                    <Item.Meta as="h4">{client.gender}</Item.Meta>
                </Item>
                <Divider />
                <div>Contacts:</div>
                <div>
                    <div>{'email: ' + client.email}</div>
                    <div>{'phone: ' + client.cell}</div>
                </div>
                <div>
                    <div>Address:</div>
                    <div>
                        <div>{'street: ' + client.location.street}</div>
                        <div>{'city: ' + client.location.city}</div>
                        <div>{'zipCode: ' + client.location.postcode}</div>
                        <div>{'country: ' + client.location.state}</div>
                    </div>
                </div>
            </Grid.Column>

        </Grid>
        </Table.Row>
    );
};

const mapStateToProps = (state) => {
    return {client: state.extendedViewState}
};

export default connect(mapStateToProps)(Details);