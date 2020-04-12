var chat = {
    data(){
        return{
            list:[
                {
                    head:"images/1.jpeg",
                    name:"虎妞",
                    text:"我要准备入睡了",
                    time:"凌晨 1:18",
                    listen:""
                },
                {
                    head:"images/3.jpeg",
                    name:"空白格",
                    text:"你又不写",
                    time:"昨天",
                    listen:""
                },
                {
                    head:"images/2.jpeg",
                    name:"A-1912web全栈开发",
                    text:"黄家羽:1",
                    time:"星期四",
                    listen:"&#xe60f;"
                },
                {
                    head:"images/4.jpeg",
                    name:"言一一",
                    text:"[捂脸]",
                    time:"昨天",
                    listen:""
                },
                {
                    head:"images/5.jpeg",
                    name:"熏悟空的熏",
                    text:"哈哈哈",
                    time:"昨天",
                    listen:""
                },
                {
                    head:"images/1.jpeg",
                    name:"虎妞",
                    text:"我要准备入睡了",
                    time:"凌晨 1:18",
                    listen:""
                },
                {
                    head:"images/3.jpeg",
                    name:"空白格",
                    text:"你又不写",
                    time:"昨天",
                    listen:""
                },
                {
                    head:"images/2.jpeg",
                    name:"A-1912web全栈开发",
                    text:"黄家羽:1",
                    time:"星期四",
                    listen:"&#xe60f;"
                },
                {
                    head:"images/4.jpeg",
                    name:"言一一",
                    text:"[捂脸]",
                    time:"昨天",
                    listen:""
                },
                {
                    head:"images/5.jpeg",
                    name:"熏悟空的熏",
                    text:"哈哈哈",
                    time:"昨天",
                    listen:""
                },
            ]
        }
    },
    template:`
        <div class="chat-wrap">
            <div class="title">
                <p>微信 (3)</p>
                <div class="iconfont">&#xe616;</div>
            </div>
            <div class="input-wrap">
                <input type="text" class="iconfont search-input" placeholder="&#xe62b; 搜索">
            </div>
            <div class="chat">
                <router-link class="chat-item" v-for="item in list"  :to="'/message/?name='+item.name+'&img='+item.head">
                    <div class="thumb"><img :src="item.head"></div>
                    <div class="chat-item-con">
                        <div class="chat-item-con-name">{{item.name}}</div>
                        <div class="chat-item-con-text">{{item.text}}</div>
                        <div class="chat-item-con-time">{{item.time}}</div>
                        <div class="chat-item-con-listen iconfont">{{item.listen}}</div>
                    </div>
                </router-link>
            </div>
        </div>
    `
}

export {chat}