import React, { Component } from "react";
import Chart from "react-apexcharts";

class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ['Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021']
                },
                yaxis: {
                    min: 0,
                    max: 8,
                    tickAmount: 5
                },
                responsive: [
                    {
                        breakpoint: 1000,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: true
                                }
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ]
            },
            series: [
                {
                    name: "series-1",
                    data: [1, 4, 3, 2, 2, 5]
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row d-flex justify-content-center">
                    <div className="mixed-chart" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="100%"
                            height='300'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;
