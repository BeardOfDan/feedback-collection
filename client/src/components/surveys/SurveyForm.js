import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        SurveyForm!
        <form onSubmit={this.props.handleSubmit((values) => {
          console.log(values);
        })}>
          <Field name="surveyTitle" component="input" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  'form': 'surveyForm'
})(SurveyForm);
