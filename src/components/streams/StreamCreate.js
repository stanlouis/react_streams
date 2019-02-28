import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderField = ({ input, label, placeholder, type }) => (
    <div>
      <label>{label}</label>
      <div className="field">
        <input
          // onChange={input.onChange}
          // value={input.value}
          {...input}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );

  render() {
    return (
      <form className="ui form">
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
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
