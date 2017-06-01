import React, {Component} from 'react';
import {Card, CardSection, Input, Button } from './common';
import { connect }from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress(){
    const {name, phone } = this.props;

    this.props.employeeCreate({ name, phone });
  }
  render() {
    console.log(this.props.employee);

    return (
      <Card>
      <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  const {name, phone} = state.employeeForm;

  return {name, phone};
}

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
