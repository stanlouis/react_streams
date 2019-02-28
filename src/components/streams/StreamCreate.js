import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderField = ({ input, label, placeholder, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          // onChange={input.onChange}
          // value={input.value}
          {...input}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderField}
          type="text"
          label="Enter Title"
          placeholder="Title"
        />
        <Field
          name="description"
          component={this.renderField}
          type="text"
          label="Enter Description"
          placeholder="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
