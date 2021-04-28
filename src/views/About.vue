<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{items}} -->
    {{prices}}
  </div>
</template>

<script>
export default {
data () {
  return {
    prices:[],
    items: {
    "1301630400": {
        "date": "01-04-2011",
        "open": 12.49,
        "high": 12.58,
        "low": 11.09,
        "close": 11.99,
        "adjclose": 10.33
    },
    "1309492800": {
        "date": "01-07-2011",
        "open": 12,
        "high": 15.1,
        "low": 11.94,
        "close": 13.62,
        "adjclose": 11.73
    },
    "1317441600": {
        "date": "01-10-2011",
        "open": 13.58,
        "high": 15.24,
        "low": 12.65,
        "close": 14.46,
        "adjclose": 12.46
    },
    "1325394000": {
        "date": "01-01-2012",
        "open": 14.62,
        "high": 22.19,
        "low": 14.61,
        "close": 21.41,
        "adjclose": 18.44
    },
    "1333252800": {
        "date": "01-04-2012",
        "open": 21.49,
        "high": 23,
        "low": 18.65,
        "close": 20.86,
        "adjclose": 17.97
    },
    "1341115200": {
        "date": "01-07-2012",
        "open": 20.88,
        "high": 25.18,
        "low": 20.36,
        "close": 23.83,
        "adjclose": 20.52
    },
    "1349064000": {
        "date": "01-10-2012",
        "open": 23.97,
        "high": 24.17,
        "low": 17.9,
        "close": 19.01,
        "adjclose": 16.44
    },
    "1357016400": {
        "date": "01-01-2013",
        "open": 19.78,
        "high": 19.82,
        "low": 14.96,
        "close": 15.81,
        "adjclose": 13.74
    },
    "1364788800": {
        "date": "01-04-2013",
        "open": 15.78,
        "high": 16.63,
        "low": 13.75,
        "close": 14.16,
        "adjclose": 12.38
    },
    "1372651200": {
        "date": "01-07-2013",
        "open": 14.38,
        "high": 18.35,
        "low": 14.33,
        "close": 17.03,
        "adjclose": 14.98
    },
    "1380600000": {
        "date": "01-10-2013",
        "open": 17.09,
        "high": 20.54,
        "low": 17.08,
        "close": 20.04,
        "adjclose": 17.75
    },
    "1388552400": {
        "date": "01-01-2014",
        "open": 19.85,
        "high": 20.01,
        "low": 17.63,
        "close": 19.17,
        "adjclose": 17.08
    },
    "1396324800": {
        "date": "01-04-2014",
        "open": 19.21,
        "high": 23.76,
        "low": 18.26,
        "close": 23.23,
        "adjclose": 20.82
    },
    "1404187200": {
        "date": "01-07-2014",
        "open": 23.38,
        "high": 25.93,
        "low": 23.14,
        "close": 25.19,
        "adjclose": 22.7
    },
    "1412136000": {
        "date": "01-10-2014",
        "open": 25.15,
        "high": 29.94,
        "low": 23.8,
        "close": 27.59,
        "adjclose": 24.99
    },
    "1420088400": {
        "date": "01-01-2015",
        "open": 27.85,
        "high": 33.4,
        "low": 26.16,
        "close": 31.11,
        "adjclose": 28.3
    },
    "1427860800": {
        "date": "01-04-2015",
        "open": 31.2,
        "high": 33.63,
        "low": 30.77,
        "close": 31.36,
        "adjclose": 28.64
    },
    "1435723200": {
        "date": "01-07-2015",
        "open": 31.73,
        "high": 33.24,
        "low": 23,
        "close": 27.58,
        "adjclose": 25.29
    },
    "1443672000": {
        "date": "01-10-2015",
        "open": 27.27,
        "high": 30.95,
        "low": 26.2,
        "close": 26.32,
        "adjclose": 24.24
    },
    "1451624400": {
        "date": "01-01-2016",
        "open": 25.65,
        "high": 27.6,
        "low": 23.1,
        "close": 27.25,
        "adjclose": 25.21
    },
    "1459483200": {
        "date": "01-04-2016",
        "open": 27.19,
        "high": 28.1,
        "low": 22.37,
        "close": 23.9,
        "adjclose": 22.23
    },
    "1467345600": {
        "date": "01-07-2016",
        "open": 23.87,
        "high": 29.05,
        "low": 23.59,
        "close": 28.26,
        "adjclose": 26.45
    },
    "1475294400": {
        "date": "01-10-2016",
        "open": 28.18,
        "high": 29.67,
        "low": 26.02,
        "close": 28.95,
        "adjclose": 27.24
    },
    "1483246800": {
        "date": "01-01-2017",
        "open": 28.95,
        "high": 36.13,
        "low": 28.69,
        "close": 35.92,
        "adjclose": 33.96
    },
    "1491019200": {
        "date": "01-04-2017",
        "open": 35.93,
        "high": 39.16,
        "low": 35.01,
        "close": 36.01,
        "adjclose": 34.2
    },
    "1498881600": {
        "date": "01-07-2017",
        "open": 36.22,
        "high": 41.24,
        "low": 35.6,
        "close": 38.53,
        "adjclose": 36.75
    },
    "1506830400": {
        "date": "01-10-2017",
        "open": 38.56,
        "high": 44.3,
        "low": 38.12,
        "close": 42.31,
        "adjclose": 40.51
    },
    "1514782800": {
        "date": "01-01-2018",
        "open": 42.54,
        "high": 45.88,
        "low": 37.56,
        "close": 41.94,
        "adjclose": 40.3
    },
    "1522555200": {
        "date": "01-04-2018",
        "open": 41.66,
        "high": 48.55,
        "low": 40.16,
        "close": 46.28,
        "adjclose": 44.65
    },
    "1530417600": {
        "date": "01-07-2018",
        "open": 45.96,
        "high": 57.42,
        "low": 45.85,
        "close": 56.44,
        "adjclose": 54.66
    },
    "1538366400": {
        "date": "01-10-2018",
        "open": 56.99,
        "high": 58.37,
        "low": 36.65,
        "close": 39.44,
        "adjclose": 38.33
    },
    "1546318800": {
        "date": "01-01-2019",
        "open": 38.72,
        "high": 49.42,
        "low": 35.5,
        "close": 47.49,
        "adjclose": 46.31
    },
    "1554091200": {
        "date": "01-04-2019",
        "open": 47.91,
        "high": 53.83,
        "low": 42.57,
        "close": 49.48,
        "adjclose": 48.47
    },
    "1561953600": {
        "date": "01-07-2019",
        "open": 50.79,
        "high": 56.6,
        "low": 48.15,
        "close": 55.99,
        "adjclose": 55.06
    },
    "1569902400": {
        "date": "01-10-2019",
        "open": 56.27,
        "high": 73.49,
        "low": 53.78,
        "close": 73.41,
        "adjclose": 72.46
    },
    "1577854800": {
        "date": "01-01-2020",
        "open": 74.06,
        "high": 81.96,
        "low": 53.15,
        "close": 63.57,
        "adjclose": 62.93
    },
    "1585713600": {
        "date": "01-04-2020",
        "open": 61.63,
        "high": 93.1,
        "low": 59.22,
        "close": 91.2,
        "adjclose": 90.5
    },
    "1593576000": {
        "date": "01-07-2020",
        "open": 91.28,
        "high": 137.98,
        "low": 89.14,
        "close": 115.81,
        "adjclose": 115.23
    },
    "1601524800": {
        "date": "01-10-2020",
        "open": 117.64,
        "high": 138.79,
        "low": 107.32,
        "close": 132.69,
        "adjclose": 132.26
    },
    "1609477200": {
        "date": "01-01-2021",
        "open": 133.52,
        "high": 145.09,
        "low": 116.21,
        "close": 122.15,
        "adjclose": 121.97
    },
    "1617249600": {
        "date": "01-04-2021",
        "open": 123.66,
        "high": 135.53,
        "low": 122.49,
        "close": 134.32,
        "adjclose": 134.32
    },
    "1619467201": {
        "date": "26-04-2021",
        "open": 134.83,
        "high": 135.06,
        "low": 133.57,
        "close": 134.72,
        "adjclose": 134.72
    }
    }
    }
  },
  methods:{
    looping(items){
      for (const [key, value] of Object.entries(items)) {
      //  this.prices.push(key.);
      let closing = [(key, value.date)];
      console.log(closing[0]);
      this.prices.push(closing[0]);
      }
    }
  },
  created(){
    this.looping(this.items);
  }
}
</script>

<style>

</style>