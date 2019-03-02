import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { Header, Grid } from 'semantic-ui-react';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducers';
import { uploadClients } from './actions/actions';
import List from './components/listContainer';
import Details from './components/detail';
import Search from './components/search';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

componentDidMount() {
    store.dispatch(uploadClients());
}

    render() {
        return(
            <Provider store={store}>
                <React.Fragment>
                      <Header as="h1" content="Client List" textAlign='center' />
                      <Search />
                  <Grid columns={1} centered>
                    <Grid.Column width={10}>
                      <List />
                      
                    </Grid.Column>
                    
                    {/* <Grid.Column width={7}>
                        <Details />
                    </Grid.Column> */}
                  </Grid>
                </React.Fragment>
            </Provider>
        )
    }
}