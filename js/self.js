var self = {
    template:`
    <div>
            <div class="self-title">
                <p>个人信息</p>
                <div class="iconfont" @click="back">&#xe61c;</div>
            </div>
            <div class="self-item1">
                <div class="self-item1-name">头像</div>
                <div class="self-item1-thunb">
                    <img src="images/6.jpeg" alt="">
                    <span class="iconfont">&#xe603;</span>
                </div>
            </div>
            <div class="self-item2">
                <div class="self-item2-name">名字</div>
                <div class="self-item2-con">
                    <span>空口咸鸭蛋 </span>
                    <span class="iconfont"> &#xe603;</span>
                </div>
            </div>
            <div class="self-item2">
                <div class="self-item2-name">微信号</div>
                <div class="self-item2-con">
                    <span>Jin-1997</span>
                </div>
            </div>
            <div class="self-item2">
                <div class="self-item2-name">我的二维码</div>
                <div class="self-item2-con">
                    <span class="iconfont"> &#xe653;</span>
                </div>
            </div>
            <div class="self-item2 bottom">
                <div class="self-item2-name">更多</div>
                <div class="self-item2-con">
                    <span class="iconfont"> &#xe603;</span>
                </div>
            </div>
            <div class="self-item2 bottom">
                <div class="self-item2-name">我的地址</div>
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
    self
}