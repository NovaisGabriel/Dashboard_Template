<template>
  <div class="home">
    <PageTitle main="Dashboard" sub="Main Statistics" />
    <div class="stats">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <Stat title="Categories" :value="stat.categories" icon="fa fa-folder" color="#CC366B" />
          </div>
          <div class="col-md-4">
            <Stat title="Articles" :value="stat.articles" icon="fa fa-file" color="#3bc480" />
          </div>
          <div class="col-md-4">
            <Stat title="Users" :value="stat.users" icon="fa fa-user" color="#DDD13C" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="chartCustom">
            <D3BarChart
              :config="chart1Config"
              :datum="chart1Data"
              :title="chart1Title"
              :source="chartSource"
            ></D3BarChart>
          </div>
        </div>
        <div class="col-md-4">
          <div class="chartCustom">
            <D3PieChart
              :config="chart2Config"
              :datum="chart2Data"
              :title="chart2Title"
              :source="chartSource"
            ></D3PieChart>
          </div>
        </div>
        <div class="col-md-4">
          <div class="chartCustom">
            <D3LineChart
              :config="chart3Config"
              :datum="chart3Data"
              :title="chart3Title"
              :source="chartSource"
            ></D3LineChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { D3BarChart } from "vue-d3-charts";
import { D3LineChart } from 'vue-d3-charts';
import { D3PieChart } from 'vue-d3-charts';
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat, D3BarChart, D3LineChart, D3PieChart },
  data: function() {
    return {
      chart1Title: "Bar Chart",
      chart2Title: "Pie Chart",
      chart3Title: "Line Chart",
      chartSource: " ",
      stat: {},
      chart1Data: [
        {name: "Arts", total: 30},
        {name: "Science", total: 21},
        {name: "Politics", total: 20},
        {name: "Economy", total: 27},
        {name: "Biology", total: 23},
        {name: "Physics", total: 12}
      ],
      chart2Data: [
        {name: "Arts", hours: 30},
        {name: "Science", hours: 21},
        {name: "Politics", hours: 20},
        {name: "Economy", hours: 27},
        {name: "Biology", hours: 23},
        {name: "Physics", hours: 12}
      ],
      chart3Data: [
        {Arts:200, Science:300, Politics:233, Economy: 270, Biology: 210, Physics: 120, date:2000},
        {Arts:210, Science:298, Politics:250, Economy: 250, Biology: 210, Physics: 111, date:2001},
        {Arts:220, Science:299, Politics:250, Economy: 240, Biology: 199, Physics: 112, date:2002},
        {Arts:233, Science:300, Politics:234, Economy: 220, Biology: 198, Physics: 114, date:2003},
        {Arts:232, Science:301, Politics:232, Economy: 210, Biology: 197, Physics: 100, date:2004},
        {Arts:245, Science:302, Politics:221, Economy: 230, Biology: 196, Physics: 100, date:2005},
        {Arts:255, Science:303, Politics:256, Economy: 190, Biology: 185, Physics: 100, date:2006},
        {Arts:263, Science:278, Politics:250, Economy: 180, Biology: 183, Physics: 99, date:2007},
        {Arts:261, Science:267, Politics:253, Economy: 167, Biology: 132, Physics: 98, date:2008},
        {Arts:267, Science:254, Politics:221, Economy: 155, Biology: 190, Physics: 99, date:2009},
        {Arts:270, Science:267, Politics:222, Economy: 145, Biology: 138, Physics: 97, date:2010},
        {Arts:278, Science:234, Politics:210, Economy: 163, Biology: 175, Physics: 87, date:2011},
        {Arts:276, Science:222, Politics:235, Economy: 177, Biology: 132, Physics: 100, date:2012},
        {Arts:287, Science:221, Politics:225, Economy: 171, Biology: 111, Physics: 110, date:2013},
        {Arts:298, Science:210, Politics:211, Economy: 189, Biology: 132, Physics: 99, date:2014},
        {Arts:300, Science:200, Politics:210, Economy: 200, Biology: 134, Physics: 111, date:2015}

      ],
      chart1Config: {
        key: "name",
        values: ["total"],
        color: {scheme: 'schemeDark2'}
      },
      chart2Config: {
        key: 'name',
        value: 'hours',
        color: {scheme: 'schemeDark2'},
        radius: {inner: 70, outter: 100, padding: 0.05, round: 5}
      },
      chart3Config: {
        values: ['Arts', 'Science', 'Politics', 'Economy', 'Biology', 'Physics'],
        date: {
          key: 'date',
          inputFormat: '%Y',
          outputFormat: '%Y',
        },
        points:false,
        axis: {
          yTicks: 3,
        },
        color: {scheme: 'schemeDark2'},
        tooltip: { labels: ['Arts', 'Science', 'Politics', 'Economy', 'Biology', 'Physics'] }
      }
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then(res => (this.stat = res.data));
    }
  },
  mounted() {
    this.getStats();
  }
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.chartCustom {
  justify-content: space-between;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: rgba(5, 25, 55, 0.5);
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
.chart__title{
  color:aliceblue;
}
.chart__source{
  color:aliceblue;
}
body{
  color:aliceblue
}
</style>
