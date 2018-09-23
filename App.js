import React, { Component } from 'react';
import { View} from 'react-native';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';

export default class App extends Component {

  onPressSearch = term => { //3
    console.log(term);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader headerText='Youtube Search' />
        <SearchBar
          onPressSearch={this.onPressSearch} //2
        />
        {/*Videolist*/}
      </View>
    );
  }
}


