const Plugin1 = {
    install(a, b) {
        console.log('plugin1第一个参数', a);
        console.log('plugin1第二个参数', b);
    }
}

function Plugin2(a, b) {
    console.log('plugin2第一个参数', a);
    console.log('plugin2第二个参数', b);
}

export {Plugin1, Plugin2}