/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContainerTemperatureChartContainerQueryVariables = {|
  serialNumber: string,
  from: string,
  to: string,
|};
export type ContainerTemperatureChartContainerQueryResponse = {|
  +sensorDataContainer: ?{|
    +sensorLabels: ?$ReadOnlyArray<?string>,
    +sensorData: ?$ReadOnlyArray<?{|
      +d: ?$ReadOnlyArray<?number>,
      +t: ?string,
    |}>,
  |}
|};
export type ContainerTemperatureChartContainerQuery = {|
  variables: ContainerTemperatureChartContainerQueryVariables,
  response: ContainerTemperatureChartContainerQueryResponse,
|};
*/


/*
query ContainerTemperatureChartContainerQuery(
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
    "name": "ContainerTemperatureChartContainerQuery",
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
    "name": "ContainerTemperatureChartContainerQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "72b69436412522220d52aa9ffb2ce93e",
    "id": null,
    "metadata": {},
    "name": "ContainerTemperatureChartContainerQuery",
    "operationKind": "query",
    "text": "query ContainerTemperatureChartContainerQuery(\n  $serialNumber: String!\n  $from: String!\n  $to: String!\n) {\n  sensorDataContainer(serialNumber: $serialNumber, from: $from, to: $to, position: [AMBIENT, INTERNAL], loggerType: CARTASENSE) {\n    sensorLabels\n    sensorData {\n      d\n      t\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10e4dc4e31e934b80d0e11af1ffcba4c';

module.exports = node;
