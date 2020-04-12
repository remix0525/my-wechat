let mess = {
    template:`
    <div class="message-wrap">
        <div class="message">
            <p>{{$route.query.name}}</p>
            <div class="iconfont left" @click="back">&#xe61c;</div>
            <div class="iconfont elli">&#xe708;</div>
        </div>
        <div class="say">
            <div class="you">
                <img :src="$route.query.img" alt="">
                <p>江苏，简称“苏”，是中华人民共和国省级行政区。省会南京，位于中国大陆东部沿海，江苏界于北纬30°45'～35°20'，东经116°18'～121°57'之间</p>
                <div class="triangle"></div>
            </div>
            <div class="you">
                <img :src="$route.query.img" alt="">
                <p>北接山东，东濒黄海，东南与浙江和上海毗邻，西接安徽 [1-2]  江苏跨江滨海，湖泊众多，地势平坦，地貌由平原、水域、低山丘陵构成</p>
                <div class="triangle"></div>
            </div>
            <div class="me">
                <p>北接山东，东濒黄海，东南与浙江和上海毗邻，西接安徽 [1-2]  江苏跨江滨海，湖泊众多，地势平坦，地貌由平原、水域、低山丘陵构成</p>
                <img src="images/6.jpeg" alt="">
                <div class="triangle"></div>
            </div>
        </div>
        <div class="send">
            <span class="iconfont">&#xe65b;</span>
            <input type="text">
            <span class="iconfont">&#xe600;</span>
            <span class="iconfont">&#xe616;</span>
        </div>
    </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}

export {mess}