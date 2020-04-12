let material = {
    template:`
    <div class="material">
        <div class="header">
            <div class="iconfont" @click="back">&#xe61c;</div>
            <div class="iconfont">&#xe708;</div>
        </div>
        <div class="material-intri">
            <img :src="$route.query.image" alt="">
            <div>
                <div class="name1">{{$route.query.name}}</div>
                <div class="name2">昵称：{{$route.query.name}}</div>
                <div class="name3">微信号：{{$route.query.name}}</div>
                <div class="adress">地区：中国</div>
            </div>
        </div>
        <div class="material-mess">
            <div>备注和标签</div>
            <div class="iconfont">&#xe603;</div>
        </div>
        <div class="material-mess bottom">
            <div>朋友权限</div>
            <div class="iconfont">&#xe603;</div>
        </div>
        <div class="material-mess">
            <div>朋友圈</div>
            <div class="iconfont">&#xe603;</div>
        </div>
        <div class="material-mess bottom">
            <div>更多信息</div>
            <div class="iconfont">&#xe603;</div>
        </div>
        <div class="iconfont blue5 material-mess2">&#xe743; 发消息</div>
        <div class="iconfont blue5 material-mess2 bottom">&#xe62e; 语音通话</div>
    </div>
    `,
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}

export {material}