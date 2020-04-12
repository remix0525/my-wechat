var main = {
    template:  `
    <div>
        <router-view></router-view>
        <div class="choose">
            <router-link to="/four/a">
                <div class="iconfont">&#xe743;</div><span>微信</span>
            </router-link>

            <router-link to="/four/b">
                <div class="iconfont">&#xe655;</div><span>通讯录</span>
            </router-link>

            <router-link to="/four/c">
                <div class="iconfont">&#xe636;</div><span>发现</span>
            </router-link>
            
            <router-link to="/four/d">   
                <div class="iconfont">&#xe626;</div><span>我</span>
            </router-link>
        </div>
    </div>
    `,
}
export { main }