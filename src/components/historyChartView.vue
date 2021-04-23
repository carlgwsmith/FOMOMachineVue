<template>
  <div>
      <history-chart :chart-data="getAddedSavingsChartData" :options="getAddedSavingsChartOptions" :width="500" :height="400" />
  </div>
</template>

<script>
import HistoryChart from './charts/historyChart.vue';
import historyChart from "./charts/historyChart.vue"
export default {
    Name: 'Longevity Results',
    data: () => ({
    priceHistory:[],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltipenabled: false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 8,
            fontSize: 14
          }
        },
        title: {
          display: true,
          text: "The Potential of More Savings",
          fontSize: "22",
          fontFamily:"'Brygada 1918', serif",
          fontStyle:"800",
          fontColor:"#274c83",
        },
        pointLabels: {
          display: false
        },
        scales: {
          xAxes: [{
            id: 'default',
            ticks: {
              min: 0,
              fontFamily:"'Brygada 1918', serif",
              fontStyle:"500",
            }
          }],
          yAxes: {
            ticks:{
              fontFamily:"'Brygada 1918', serif",
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
  getAddedSavingsChartData: function () {
    let chartData = {};
    let datasets = [];

    // let ageArray =[];
    // var retireage = this.retireage;
    // var retirementsavings = this.retirementsavings;
    // var annualincome = this.annualincome * 0.15;
    // var currentage = this.currentage;
    // var yearlySaving = [retirementsavings];
    // var yearlySaving2 = [retirementsavings];


    
    // for (var i = currentage; i <= retireage; i++) {
    // ageArray.push(i);
    // }
    // for (var x = currentage; x <= retireage; x++) {
    // yearlySaving.push(retirementsavings * yearlySaving.length );
    // }

    // for (var y = currentage; y < retireage; y++){
    //   yearlySaving2.push(annualincome * yearlySaving2.length);
    // }
    // console.log(yearlySaving2);

    datasets.push({ data: yearlySaving, label: 'Current Retirement Savings', borderColor: '#71eabb', fill: true, backgroundColor: "rgba(113,234,187,0.25)", pointBorderColor: "#2DE199" },
     {data: yearlySaving2, borderColor: '#19afff', label: 'Optimal Retirement Savings', fill: false})


    chartData.labels =  ageArray
    chartData.datasets = datasets
    return chartData
  },
  getAddedSavingsChartOptions: function () {
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