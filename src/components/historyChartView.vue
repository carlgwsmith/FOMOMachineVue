<template>
  <div>
     <history-chart  :chart-data="getHistoryChartData" :options="getHistoryChartOptions" :width="500" :height="400"/>
  </div>
</template>

// <script>
import HistoryChart from './charts/HistoryChart.vue';

export default {
    Name: 'Longevity Results',
    data: () => ({
    priceHistory:[],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltipenabled: false,
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            boxWidth: 8,
            fontSize: 14
          }
        },
        title: {
          display: false,
          text: "The Potential of Early Investments",
          fontSize: "22",
          fontFamily:"'Nunito Sans', sans-serif",
          fontStyle:"500",
          fontColor:"#828282",
        },
        pointLabels: {
          display: false
        },
        scales: {
          xAxes: [{
            id: 'default',
            text: '3mo',
            ticks: {
              min: 0,
              fontFamily:"'Nunito Sans', Helvetica, Arial, sans-serif",
              fontStyle:"500",
            }
          }],
          yAxes: {
            ticks:{
              fontFamily:"'Nunito Sans', Helvetica, Arial, sans-serif",
              fontStyle:"500",
            }
          }
        }
      },
    
}),
    components: {
        HistoryChart
    },
      computed: {
        returnState () {
    return this.$store.getters.getState;
  },
  getHistoryChartData: function () {
    let chartData = {};
    let datasets = [];

    var pricesState = this.priceHistory;
    var prices = [];
    var priceDates = [];

      for (const [key, value] of Object.entries(pricesState)) {
      let closing = [(key, value.close)];
      console.log(closing[0]);
      prices.push(closing[0]);
      }
      
      for (const [key, value] of Object.entries(pricesState)) {

      let date = [(key, value.date)];
      console.log(date[0]);
      priceDates.push(date[0].substring(3));
      }

    datasets.push({ data: prices, label: 'Price', borderColor: '#71eabb', fill: true, backgroundColor: "rgba(113,234,187,0.25)", pointBorderColor: "#2DE199" })


    chartData.labels =  priceDates
    chartData.datasets = datasets
    return chartData
  },
  getHistoryChartOptions: function () {
      let opts = this.options
      return opts
    },
},
mounted() {
    this.priceHistory = this.$store.getters.getPriceHistory;
},
}
</script>

<style>

</style>