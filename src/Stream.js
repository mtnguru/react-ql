import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_NODES = gql`
  query($types: [String]!) {
    nodeQuery (
      limit: 40
      filter: {
        conditions: [
          {field: "type", value: $types}
#         {field: "uid", value: ["1"]}
        ]
      }
    ) {
      count
      entities {
        entityId
        entityLabel
        entityBundle
        
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
    let types = ['page', 'landing_page', 'article'];
    return (
      <Query
        query={GET_NODES}
        variables={{types}}
      >
        {(response) => {
          let num = 0;
          const {nodeQuery} = response.data;
          if (!nodeQuery) {
            return null;
          }
          return (
            <div className="maestro-stream">
              {
                nodeQuery.entities.map(item => {
                  debugger;
                  // Change file path to point to drupal site.
                  let content = item.entityRendered.replace("/sites/default/files", "http://light/sites/default/files");

                  return (
                    <div
                      key={item.entityId}
                      className="maestro-item"
                    >
                      <div className="header">{item.entityBundle}</div>
                      <div className="rendered" dangerouslySetInnerHTML={{ __html: content}} />
                    </div>
                  )
                })
              }
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Stream;