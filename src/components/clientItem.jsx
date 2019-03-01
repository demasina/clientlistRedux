import React from 'react';
import { connect } from 'react-redux';
import { setExtendedViewAction } from '../actions/actions';
import { List, Image } from 'semantic-ui-react';

const Item = ({client, setExtendedView}) => {
    return (
        <List.Item onClick={() => {setExtendedView(client)}}>
            <Image avatar size="tiny" src={client.picture.large} alt=""/>
                <List.Content >
                    <List.Header>{client.name.first + ' ' + client.name.last}</List.Header>
                    <List.Description>{client.location.city}</List.Description>
                </List.Content>
        </List.Item>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {setExtendedView: (client) => dispatch(setExtendedViewAction(client))}
};

export default connect(null, mapDispatchToProps)(Item);