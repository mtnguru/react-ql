import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_NODES = gql`
  {
    currentUserContext{
      entityLabel
    },
    nodeQuery {
      entities {
        entityLabel
        entityId
      }
    }
  }
`;

class List extends Component {
  render() {
    return (
      <Query query={GET_NODES}>
        {(response) => {
          debugger;
          let num = 0;
          const {nodeQuery, currentUserContext} = response.data;
          if (!nodeQuery) {
            return null;
          }
          return (
            <div>
              <div>User - {currentUserContext.entityLabel}</div>
              <ul>
                {
                  nodeQuery.entities.map(item => {
                    return <li key={item.entityId}>{++num} {item.entityId} - {item.entityLabel}</li>;
                  })
                }
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default List;
