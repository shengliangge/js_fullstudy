<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <p>{{localTime}}</p>
        <span class="change-city">切换城市</span>
      </div>
      <div class="city-info">
        <p class="city-name">{{mapData.city}}</p>
        <p class="city-weather">{{mapData.weather}}</p>
        <h1 class="city-temp">30°C</h1>
        <p class="weather-detail">
          <span>风力：{{mapData.windPower}}</span>
          <span>风向：{{mapData.windDirection}}</span>
          <span>空气湿度：{{mapData.humidity}}</span>
        </p>
      </div>
    </div>
    <div class="feature">
      <div class="group">
        明日：
        <span class="tm">白天：{{Forcast[1].dayTemp}}{{Forcast[1].dayWeather}}{{Forcast[1].dayWeather}}</span>
        <span class="tm">夜间：{{Forcast[1].nightTemp}}{{Forcast[1].dayWeather}}{{Forcast[1].nightWeather}}</span>
      </div>
      <div class="group">
        后天：
        <span class="tm">白天：多云</span>
        <span class="tm">夜间：大雨</span>
      </div>
    </div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      Forcast: [],
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },

  mounted() {
    console.log(this.$refs.mapContainer);

    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let _self = this;
      let map = new AMap.Map(_self.$refs.mapContainer, {
        resizeEnable: true,
      });
      AMap.plugin("AMap.CitySearch", function () {
        let citySearch = new AMap.CitySearch();
        console.log(citySearch);
        citySearch.getLocalCity(function (status, result) {
          console.log(status);
          console.log(result);
          if (status === "complete" && result.info === "OK") {
            // 获取位置成功
            _self.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _self = this;
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function (err, data) {
          console.log(err, data);
          _self.mapData = data;
        });
        weather.getForecast(cityName, function (err, data) {
            _self.Forcast = data.forecasts;
          console.log(err, data);
        });
      });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;

  background: #000;
  color: #fff;
  opacity: 0.65;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.city-info {
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}
.city-temp {
  font-size: 40px;
}
.feature .group {
  height: 44px;
  line-height: 44px;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 4px;
  color: raba(16, 16, 16, 1);
  margin-bottom: 10px;
  padding: 0 10px;
}
.tm {
  margin-right: 20px;
}
</style>