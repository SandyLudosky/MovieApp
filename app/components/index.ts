import React, { Component, Fragment} from 'react';
import { SearchBar } from 'react-native-elements';

import {
    SafeAreaView,
    Button,
    Text,
    StatusBar,
  } from 'react-native';

interface State {
    search: string,
    text: string,
    results: any[],
    isLoading: boolean
}

class HomeScreen extends Component<{}, State> {

    render() {
        const { search } = this.state
        return (
          <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                 <SearchBar placeholder="Search Movie..." value={search} 
                            lightTheme={true} round={true}
                            onChangeText={this.onTextChange} />
                 <List children={this.state} props={this.props} />
            </SafeAreaView>
          </Fragment>
        )
      }
}
export default HomeScreen