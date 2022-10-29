import { createElement, createRef, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function candleChart(props) {
  const initialRender = useRef(true)
  const chartRef = createRef()

  const [chart, setChart] = useState()

  const options = {
    series: [
      {
        data: seriesData,
      },
    ], 
    options: {
      chart: {
        type: 'candlestick',
        height: 290,
        id: 'candles',
        toolbar: {
          autoSelected: 'pan',
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#3C90EB',
            downward: '#DF7D46',
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
    },

    seriesBar: [
      {
        name: 'volume',
        data: seriesDataLinear,
      },
    ],
    optionsBar: {
      chart: {
        height: 160,
        type: 'bar',
        brush: {
          enabled: true,
          target: 'candles',
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('20 Jan 2017').getTime(),
            max: new Date('10 Dec 2017').getTime(),
          },
          fill: {
            color: '#ccc',
            opacity: 0.4,
          },
          stroke: {
            color: '#0D47A1',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: '#F15B46',
              },
              {
                from: 1,
                to: 10000,
                color: '#FEB019',
              },
            ],
          },
        },
      },
      stroke: {
        width: 0,
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  }

  const { type, data, width, height, getRef, ...computedProps } = props

  return (
    <div class="chart-box">
      <div id="chart-candlestick">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={290}
        />
      </div>
      <div id="chart-bar">
        <ReactApexChart
          options={this.state.optionsBar}
          series={this.state.seriesBar}
          type="bar"
          height={160}
        />
      </div>
    </div>
  )
}

//candleChart.propTypes = {
//  type: PropTypes.oneOf(["line", "pie", "doughnut", "bar"]),
//  data: PropTypes.object,
//  options: PropTypes.object,
//  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//  getRef: PropTypes.func,
//  className: PropTypes.string,
//};

//candleChart.defaultProps = {
//  type: "line",
//  data: {},
//  options: {},
//  width: "auto",
//  height: "auto",
//  getRef: () => {},
//  className: "",
//};

export default candleChart
