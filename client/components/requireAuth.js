//HOC function for authentication purpose

import { graphql } from "react-apollo";
import React, { Component } from "react";
import CurrentUserQuery from "../queries/CurrentUser";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      //Check whether user is signed in or not
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(CurrentUserQuery)(RequireAuth);
};
