import WaymonBtn from './WaymonBtn.vue' // 引入封装好的组件

const components = {
    WaymonBtn
}// 将来如果有其它组件,都可以写到这个数组里
function install(Vue) {
    const keys = Object.keys(components);
    keys.forEach((name) => {
        const component = components[name];
        Vue.component(component.name || name, component);
    });
}

export default {
    install,
    ...components,
};
