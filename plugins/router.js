module.exports = (ctx, pluginOpts) => {

    ctx.modifyMiniConfigs(({ configMap }) => {
        console.log("动态添加app.config中的pages字段")
        configMap["app.config"].content.pages.push("pages/index2/index")
        console.log(configMap["app.config"].content.pages)
    })
}