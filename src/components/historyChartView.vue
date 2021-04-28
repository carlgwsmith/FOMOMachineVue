<template>
  <div>
     <history-chart  :chart-data="getHistoryChartData" :options="getHistoryChartOptions" :width="500" :height="400"/>
  </div>
</template>

<script>
import HistoryChart from './charts/HistoryChart.vue';

export default {
    Name: 'Longevity Results',
    data: () => ({
    retireage:0,
    lifespan:0,
    retirementspending: 0,
    retirementwithsavings:0,
    retirementincome: 0,
    retirementyears: 0,
    retirementsalary: 0,
    spending:0,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltipenabled: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
              }
            }
        },
        title: {
          display: true,
          text: "How Much Money Do You Need to Retire?",
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
              fontSize:"16"
            }
          }],
          yAxes: [{
            ticks:{
            beginAtZero: true,
            min:0,
            fontFamily:"'Brygada 1918', serif",
            fontStyle:"500",
            }
          }]
        }
      },
    
}),
components: {
    HistoryChart,
    },
computed: {
    returnState () {
    return this.$store.getters.getState;
  },
  getHistoryChartData: function () {
    let chartData = {};
    let datasets = [];

    var spending = this.retirementyears * this.spending;
    var retiresavings = this.retirementwithsavings - spending;
    var rsalary = this.retirementsalary * this.retirementyears;

    var haveAmount = retiresavings + rsalary;
    var needAmount = this.retirementspending


    var yearlySpending = [haveAmount, needAmount];
    var bgColors = ['#71eabb', '#ea7171']
    
    datasets.push({ data: yearlySpending, backgroundColor: bgColors, label: '' })


    chartData.labels =  ['How much you have', 'How much you need']
    chartData.datasets = datasets
    return chartData
  },
  getHistoryChartOptions: function () {
      let opts = this.options
      return opts
    },
},
mounted() {
    this.retireage = this.$store.getters.getRetireAge;
    this.lifespan = this.$store.getters.getLifeSpan;
    this.retirementwithsavings = this.$store.getters.getRetirementWithSavings;
    this.retirementincome = this.$store.getters.getRetirementIncome;
    this.retirementspending = this.$store.getters.getRetirementSpending;
    this.retirementyears = this.$store.getters.getRetirementYears;
    this.retirementsalary = this.$store.getters.getRetirementSalary;
    this.spending = this.$store.getters.getNonRetirementSpending;
},
}
</script>
//<script>
// import HistoryChart from './charts/historyChart.vue';

// export default {
//     Name: 'Longevity Results',
//     data: () => ({
//     priceHistory:[],
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         tooltipenabled: false,
//         legend: {
//           display: true,
//           position: 'bottom',
//           labels: {
//             boxWidth: 8,
//             fontSize: 14
//           }
//         },
//         title: {
//           display: true,
//           text: "The Potential of More Savings",
//           fontSize: "22",
//           fontFamily:"'Brygada 1918', serif",
//           fontStyle:"800",
//           fontColor:"#274c83",
//         },
//         pointLabels: {
//           display: false
//         },
//         scales: {
//           xAxes: [{
//             id: 'default',
//             ticks: {
//               min: 0,
//               fontFamily:"'Brygada 1918', serif",
//               fontStyle:"500",
//             }
//           }],
//           yAxes: {
//             ticks:{
//               fontFamily:"'Brygada 1918', serif",
//               fontStyle:"500",
//             }
//           }
//         }
//       },
    
// }),
//     components: {
//         HistoryChart
//     },
//       computed: {
//         returnState () {
//     return this.$store.getters.getState;
//   },
//   getHistoryChartData: function () {
//     let chartData = {};
//     let datasets = [];

//     var pricesState = this.priceHistory;
//     var prices = [];
//     var priceDates = [];

//       for (const [key, value] of Object.entries(pricesState)) {
//       let closing = [(key, value.close)];
//       console.log(closing[0]);
//       prices.push(closing[0]);
//       }
      
//       for (const [key, value] of Object.entries(pricesState)) {

//       let date = [(key, value.date)];
//       console.log(date[0]);
//       priceDates.push(date[0]);
//       }


//     datasets.push({ data: prices, label: 'Current Retirement Savings', borderColor: '#71eabb', fill: true, backgroundColor: "rgba(113,234,187,0.25)", pointBorderColor: "#2DE199" })
//     datasets.push({ data: prices })


//     chartData.labels =  priceDates
//     chartData.datasets = datasets
//     return chartData
//   },
//   getHistoryChartOptions: function () {
//       let opts = this.options
//       return opts
//     },
// },
// mounted() {
//     this.priceHistory = this.$store.getters.getPriceHistory;
// },
// }
// </script>

<style>

</style>