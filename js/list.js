var list = {
    data() {
        return {
            list1: [
                {
                    name: "阿毛",
                    image: "images/7.jpeg"
                },
                {
                    name: "always",
                    image: "images/8.jpeg"
                },
            ],
            list2: [
                {
                    name: "步步高",
                    image: "images/9.jpeg"
                },
                {
                    name: "break",
                    image: "images/10.jpeg"
                },
            ],
            list3: [
                {
                    name: "cc",
                    image: "images/11.jpeg"
                },
                {
                    name: "沉默",
                    image: "images/12.jpeg"
                },
                {
                    name: "陈铧",
                    image: "images/13.jpeg"
                },
            ],
            isLine: false
        }
    },
    template: `
    <div class="list-wrap">
            <div class="title">
                <p>通讯录</p>
                <div class="iconfont">&#xe657;</div>
            </div>
            
            <div class="input-wrap">
                <input type="text" class="iconfont search-input" placeholder="&#xe62b; 搜索">
            </div>

            <div class="logo-wrap">
                <div class="logo-item">
                    <div class="logo iconfont orange">&#xe618;</div>
                    <div class="intri">新的朋友</div>
                </div>
                <div class="logo-item">
                    <div class="logo iconfont lv">&#xe68f;</div>
                    <div class="intri">群聊</div>
                </div>
                <div class="logo-item">
                    <div class="logo iconfont blue1">&#xe629;</div>
                    <div class="intri">标签</div>
                </div>
                <div class="logo-item">
                    <div class="logo iconfont blue2">&#xe68b;</div>
                    <div class="intri line">公众号</div>
                </div>
            </div>
            <div class="friend-con">
                <div class="friend">
                    <div class="friend-A">A</div>
                    <router-link class="friend-item" v-for="item1 in list1" :to="'/material/?name='+item1.name+'&image='+item1.image">
                        <div class="friend-logo"><img :src="item1.image" alt=""></div>
                        <div class="friend-intri">{{item1.name}}</div>
                    </router-link>
                </div>
                <div class="friend">
                    <div class="friend-A">B</div>
                    <router-link class="friend-item" v-for="item2 in list2" :to="'/material/?name='+item2.name+'&image='+item2.image">
                        <div class="friend-logo"><img :src="item2.image" alt=""></div>
                        <div class="friend-intri">{{item2.name}}</div>
                    </router-link>
                </div>
                <div class="friend">
                    <div class="friend-A">C</div>
                    <router-link class="friend-item" v-for="item3 in list3" :to="'/material/?name='+item3.name+'&image='+item3.image">
                        <div class="friend-logo"><img :src="item3.image" alt=""></div>
                        <div class="friend-intri">{{item3.name}}</div>
                    </router-link>
                </div>
            </div>
           
        </div>`,
}
export { list }