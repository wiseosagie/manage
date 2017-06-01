import React, { Component} from 'react';
import { View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate} from '../actions';
import { CardSection, Input} from './common';


class EmployeeForm extends Component {
  render() {
    const { inputStyle } = styles;
    return (
    //  <View>
      <Image source={require('/Users/user/react/manage/src/images/medii.png')}>


            <CardSection>
            <Text style={inputStyle}>Word</Text>
            </CardSection>

              <CardSection>

                <Input
                  //label="name"
                  placeholder="word"
                  value={this.props.name}
                  onChangeText={value => this.props.employeeUpdate({prop:'name', value })}
                />

              </CardSection>

              <CardSection>
              <Text style={inputStyle}>Translate</Text>
              </CardSection>

              <CardSection>
                <Input
                  //label="Phone"
                  placeholder="555-555-5555"
                  value={this.props.phone}
                  onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
              </CardSection>
</Image>

    //  </View>
    );

  }
}

const styles = {
  inputStyle: {
    backgroundColor: '#454545',
    fontSize: 18,
    lineHeight: 20,
    flex: 1,
    color:'#fff',
    textAlign: 'center',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = (state) => {
  const {name, phone} = state.employeeForm;

  return {name, phone};
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
