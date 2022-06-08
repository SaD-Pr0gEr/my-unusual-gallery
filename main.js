const App = Vue.createApp({
    data(){
        return {
            photos: [
                {name: Math.random(), url: "https://www.w3schools.com/css/img_5terre.jpg"},
                {name: Math.random(), url: "https://www.w3schools.com/css/img_forest.jpg"},
                {name: Math.random(), url: "https://www.w3schools.com/css/img_lights.jpg"},
                {name: Math.random(), url: "https://www.w3schools.com/css/img_mountains.jpg"},
                {name: Math.random(), url: "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                {name: Math.random(), url: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg"},
                {name: Math.random(), url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"},
                {name: Math.random(), url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"},
                {name: Math.random(), url: "https://s.alamy.com/assets/latest/resolutions/2560/homepage/blogs/FTAPG3.jpg"},
                {name: Math.random(), url: "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI="},
                {name: Math.random(), url: "https://live-production.wcms.abc-cdn.net.au/50749be1153e1907d7e1208fc96432f8?impolicy=wcms_crop_resize&cropH=844&cropW=1500&xPos=0&yPos=0&width=862&height=485"},
                {name: Math.random(), url: "https://thumbs.dreamstime.com/b/nature-de-paysage-mountan-dans-les-alpes-avec-l-arc-en-ciel-76824355.jpg"},
                {name: Math.random(), url: "https://live-production.wcms.abc-cdn.net.au/eb889b397e5458d1e58cdda0db1fcca4?impolicy=wcms_crop_resize&cropH=605&cropW=1073&xPos=0&yPos=277&width=862&height=485"},
                {name: Math.random(), url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe-udsD2xsCKu6No0WQ6UkGvK6kGqHIFmaA&usqp=CAU"},
                {name: Math.random(), url: "https://stockphoto.com/assets/landingpage/images/Depositphotos_48265849_original.jpg"},
                {name: Math.random(), url: "https://s3.reutersmedia.net/resources/r/?m=02&d=20211004&t=2&i=1576794788&w=780&fh=&fw=&ll=&pl=&sq=&r=2021-10-04T143213Z_42023_MRPRC2V1Q9II8U3_RTRMADP_0_SPAIN-VOLCANO"},
                {name: Math.random(), url: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1374510.jpg&fm=jpg"},
                {name: Math.random(), url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSk2gzoEhClkwk9lx9a9a8q9EC9PGzSV3Tg&usqp=CAU"},
                {name: Math.random(), url: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210729162145-02-photos-this-week-0729.jpg"},
                {name: Math.random(), url: "https://www.wollondillyadvertiser.com.au/images/transform/v1/crop/frm/GJZ5TVpAk84wrTzsQfLQRB/d3d69b7a-fff7-4d64-8196-e33d74d11cf5.jpg/r0_123_2304_1418_w1200_h678_fmax.jpg"},
            ]
        }
    },
    methods: {
        randomChange(index) {
            let first = Math.floor(Math.random()*this.photos.length);
            [this.photos[first], this.photos[index]] = [this.photos[index], this.photos[first]]
        }
    }
})

App.mount("#app")
