import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_NODES = gql`
  {
    nodeQuery {
      count
      entities {
        entityId
        entityLabel
        
        ... on Node {
          entityRendered(mode: TEASER) 
          type {targetId}
          uid {targetId}
        }
      }
    }
  }
`;

class Stream extends Component {
  render() {
    return (
      <Query query={GET_NODES}>
        {(response) => {
          let num = 0;
          const {nodeQuery} = response.data;
          if (!nodeQuery) {
            return null;
          }
          return (
            <div className="maestro-stream">
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

export default Stream;