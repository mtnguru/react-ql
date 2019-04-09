
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  {
    currentUserContext{
      entityId
      entityLabel
    },
  }
`;

class Profile extends Component {
  render() {
    return (
      <Query query={GET_CURRENT_USER}>
        {(response) => {
          const {currentUserContext} = response.data;
          if (!currentUserContext) {
            return null;
          }
          return (
            <div className="maestro-profile">User: {currentUserContext.entityId} - {currentUserContext.entityLabel}</div>
          );
        }}
      </Query>
    );
  }
}

export default Profile;
