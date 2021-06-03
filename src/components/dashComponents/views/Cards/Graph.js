import {
    ArgumentAxis,
    SplineSeries,
    Chart,
    LineSeries, ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import * as React from 'react';

const data = [
  { argument: "Monday", value: 45 },
  { argument: "Tuesday", value: 33 },
  { argument: "Wednesday", value: 39 },
  { argument: "Thursday", value: 42 },
  { argument: "Friday", value: 37 },
  { argument: "Saturday", value: 40 },
  { argument: "Sunday", value: 43 },
  { arguement_2: "Monday", value_2: 33 },
  { arguement_2: "Tuesday", value_2: 35 },
  { arguement_2: "Wednesday", value_2: 38 },
  { arguement_2: "Thursday", value_2: 39 },
  { arguement_2: "Friday", value_2: 37 },
  { arguement_2: "Saturday", value_2: 41 },
  { arguement_2: "Sunday", value_2: 40 },

];

export default function Graph() {
    return (
            <Chart
              data={data}
            >
              <ArgumentAxis />
              <ValueAxis />
              <SplineSeries valueField="value" argumentField="argument" color="red"/>
              <LineSeries valueField="value_2" argumentField="arguement_2" color="teal"/>
            </Chart>
    )
}
  

