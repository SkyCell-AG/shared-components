/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContainerChartQueryVariables = {|
  serialNumber: string,
  from: string,
  to: string,
|};
export type ContainerChartQueryResponse = {|
  +sensorDataContainer: ?{|
    +sensorLabels: ?$ReadOnlyArray<?string>,
    +sensorData: ?$ReadOnlyArray<?{|
      +d: ?$ReadOnlyArray<?number>,
      +t: ?string,
    |}>,
  |}
|};
export type ContainerChartQuery = {|
  variables: ContainerChartQueryVariables,
  response: ContainerChartQueryResponse,
|};
*/


/*
query ContainerChartQuery(
  $serialNumber: String!
  $from: String!
  $to: String!
) {
  sensorDataContainer(serialNumber: $serialNumber, from: $from, to: $to, position: [AMBIENT, INTERNAL], loggerType: CARTASENSE) {
    sensorLabels
    sensorData {
      d
      t
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "from"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "serialNumber"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "to"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "from",
        "variableName": "from"
      },
      {
        "kind": "Literal",
        "name": "loggerType",
        "value": "CARTASENSE"
      },
      {
        "kind": "Literal",
        "name": "position",
        "value": [
          "AMBIENT",
          "INTERNAL"
        ]
      },
      {
        "kind": "Variable",
        "name": "serialNumber",
        "variableName": "serialNumber"
      },
      {
        "kind": "Variable",
        "name": "to",
        "variableName": "to"
      }
    ],
    "concreteType": "SensorDataResponse",
    "kind": "LinkedField",
    "name": "sensorDataContainer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sensorLabels",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SensorDataItem",
        "kind": "LinkedField",
        "name": "sensorData",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "d",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "t",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContainerChartQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ContainerChartQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "484ce0ca872895f3a98b20d62702d21c",
    "id": null,
    "metadata": {},
    "name": "ContainerChartQuery",
    "operationKind": "query",
    "text": "query ContainerChartQuery(\n  $serialNumber: String!\n  $from: String!\n  $to: String!\n) {\n  sensorDataContainer(serialNumber: $serialNumber, from: $from, to: $to, position: [AMBIENT, INTERNAL], loggerType: CARTASENSE) {\n    sensorLabels\n    sensorData {\n      d\n      t\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2bca1982b838c7201c7ea354e6bb25c';

module.exports = node;
