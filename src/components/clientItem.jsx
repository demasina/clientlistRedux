import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from './detail';
import { setExtendedViewAction } from '../actions/actions';
import { List, Image, Table, Accordion, Icon } from 'semantic-ui-react';

class Item extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
    render() {
        const {client, setExtendedView} = this.props
        const { activeIndex } = this.state
        return (
            <Table.Row onClick={() => {setExtendedView(client)}}>
                <Table.Cell><Image avatar size="tiny" src={client.picture.large} alt=""/></Table.Cell>  
                <Table.Cell>{client.name.last}</Table.Cell>
                <Table.Cell>{client.name.first}</Table.Cell>
                <Table.Cell>{client.login.username}</Table.Cell>
                <Table.Cell>{client.phone}</Table.Cell>
                <Table.Cell>{client.location.state}</Table.Cell>
                <Table.Cell>
                <Accordion>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='plus' />
                           
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Details />
                    </Accordion.Content>
                </Accordion>
                </Table.Cell>
            </Table.Row>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return {setExtendedView: (client) => dispatch(setExtendedViewAction(client))}
};

export default connect(null, mapDispatchToProps)(Item);