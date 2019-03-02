import React, { Fragment } from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </Fragment>
  );
  return (
    <Fragment>
      StreamCreate
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </Fragment>
  );
};

export default StreamDelete;
