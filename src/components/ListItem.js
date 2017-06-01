import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import AlphabetListView from 'react-native-alphabetlistview';

class ListItem extends Component {
  onRowPress(){
    Actions.EmployeeEdit( {employee: this.props.employee });
  }
  render() {
    const {name} = this.props.employee;
    //const {phone} = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
