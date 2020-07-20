const app = getApp()
const cars = [];

for (let i = 0; i < 10; i++) {
    let latitude = Math.random() * 0.001;
    console.log(latitude)
}


Page({
    data: {
        latitude: 28.714249,
        longitude: 115.828711,
        markers: [{
                iconPath: "../../img/单车.png",
                id: 0,
                latitude: 28.719591,
                longitude: 115.834711,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../img/单车.png",
                id: 1,
                latitude: 28.719994,
                longitude: 115.824520,
                width: 30,
                height: 30
            }
        ],

    }
})