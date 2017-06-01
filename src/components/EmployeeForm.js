import React, { Component} from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate} from '../actions';
import { CardSection, Input} from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>

              <CardSection>
                <Input
                  label="name"
                  placeholder="word"
                  value={this.props.name}
                  onChangeText={value => this.props.employeeUpdate({prop:'name', value })}
                />
              </CardSection>

              <CardSection>
                <Input
                  label="Phone"
                  placeholder="555-555-5555"
                  value={this.props.phone}
                  onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
              </CardSection>


      </View>
    );

  }
}

const mapStateToProps = (state) => {
  const {name, phone} = state.employeeForm;

  return {name, phone};
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
