'use strict';

(function() {

var chartDOMContainer = document.querySelector('.chart-container');

var chartConfig = {
    title: 'Распределение рынка браузеров, 2021',
    tooltipValueFormat: '<b>{point.percentage:.1f}%</b>',
    animationDuration: 600,
    data: window.w.series[0].data
};

renderChart(chartDOMContainer, chartConfig);

function renderChart(chartDOMContainer, chartConfig) {
    Highcharts.chart(chartDOMContainer, {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: chartConfig.title
        },
        tooltip: {
            pointFormat: chartConfig.tooltipValueFormat
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                animation: {
                    duration: chartConfig.animationDuration
                }
            }
        },
        legend: {
            itemWidth: 150 // для выравнивания легенды в 2 колонки
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [
            {
                data: chartConfig.data
            }
        ]
    });
}

})();
