AutoForm.hooks({
    add: {
        onError: function (operation, error) {
            return App.alertError(error);
        }
    }
});


/*
 * Function to draw the gauge
 */
function builtGauge() {

    $('#container-gauge').highcharts({
        chart: {
            type: 'solidgauge'
        },

        title: "Sensor Load",

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Sensor Load'
            },

            stops: [
                [0.1, '#55BF3B'],
                [0.5, '#DDDF0D'],
                [0.9, '#DF5353']
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Performance',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:15px;color:#7e7e7e">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"></span></div>'
            },
            tooltip: {
                valueSuffix: ' '
            }
        }]
    });
}

/*
 * Just for the example: change the value every 2 seconds
 */
setInterval(function () {
    var chart = $('#container-gauge').highcharts(),
        point,
        newVal,
        inc;

    if (chart) {
        point = chart.series[0].points[0];
        inc = Math.round((Math.random() - 0.5) * 100);
        newVal = point.y + inc;

        if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 2000);


/*
 * Call the function to built the chart when the template is rendered
 */
Template.gaugeDemo.rendered = function () {
    builtGauge();
};

Template.dashboard.topGenresChart = function () {
    return {
        chart: {
            height: 200,
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.floor((Math.random() * 5000) + 1);
                        if (y > 4000) {
                            y -= 2000;
                        }
                        if (y < 2000) {
                            y += 2000;
                        }
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Network Sensor Throughput'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            min: 100,
            max: 5000,
            title: {
                text: 'PPS'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]

    };
};


Template.dashboard.helpers({
    alerts: function () {
        return Alerts.find({}, {sort:{timestamp: -1}, limit: 10});
    }
});

function buildChartSensor() {
    $('#sensorCharter').highcharts('StockChart', {
        chart: {
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.round(Math.random() * 100);
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Sensor Network Throughput'
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                    ]);
                }
                return data;
            }())
        }]
    });

}

Template.sensorChart.rendered = function () {
    buildChartSensor();
};

Template.indicatorMetrics.helpers({
    communities: function () {
        return Sensors.find();
    },
    indicatorTotal: function () {
        Meteor.call("getIndicatorCount", function (err, res) {
            if (!err) Session.set("getIndicatorCount", res);
        });
        return Session.get("getIndicatorCount");
    },
    dataSources: function () {
        return DataSources.find();
    }
});

Template.alertSummary.helpers({
    activeAlerts: function () {
        return Alerts.find().count() > 0;
    },
    myAlertCount: function () {
        return Alerts.find().count();
    },
    myAlertTotal: function () {
        Meteor.call("getAlertCount", function (err, res) {
            if (!err) Session.set("getAlertCount", res);
        });
        return Session.get("getAlertCount");
    }
});

Template.dashboard.events({
    'click .clickable': function () {
        Meteor.call('submitJob', function (err, response) {
            Session.set('ssResponse', response);
        });
    },
    'click .fa-eye': function() {
        console.log('clicked the button');
        this.isReported = false;
    },
        'click .fa-eye-slash': function() {
        console.log('clicked the other button');
        this.isReported = true;
    }

});