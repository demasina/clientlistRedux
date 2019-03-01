import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExtendedViewAction } from '../actions/actions';
import ClientList from './clientList';

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.filteredClients = props.clients;
        this.props.setExtendedView(this.filteredClients[0]);
    }

    componentWillReceiveProps(nextProps) {
        this.filteredClients = this.filter(nextProps.clients, nextProps.search);
        this.props.setExtendedView(this.filteredClients[0]);
    }

    filter(clients, search) {
        if (!search) {
            return clients;
        }
        const filteredClients = clients.results.filter((client) => {
            let arrClient = [];
            for (let key in client) {
                arrClient = [...arrClient, ...Object.values(client[key])];
            }
            return arrClient.some((item) => item.toLowerCase().includes(search));
        });
        console.log(filteredClients)
        return filteredClients;
    };

    render() {
        return (
            <ClientList clients={this.filteredClients}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clientsState,
        search: state.searchState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {setExtendedView: (client) => dispatch(setExtendedViewAction(client))}
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);