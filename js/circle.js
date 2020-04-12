let circle = {
    template:`
        <div>
            <div class="friend-circle">
                <div class="icon-title">
                    <div class="iconfont" @click="back">&#xe61c;</div>
                    <div class="iconfont">&#xe6e7;</div>
                </div>
            </div>
            <div class="circle-name">
                <span class="xianyadan">空口咸鸭蛋</span>
                <span><img src="images/6.jpeg" alt=""></span>
            </div>
            <div class="con">
                <div><img src="images/1.jpeg" alt=""></div>
                <div>
                    <p class="huniu">虎妞</p>
                    <p>宝宝不想写了</p>
                    <img src="images/15.jpeg" alt="" class="circle-thumb">
                </div>
            </div>
        </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
export {
    circle
}