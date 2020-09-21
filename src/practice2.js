// TODO 逻辑上没有问题，但是嵌套层太多，可以思考有没有办法可以减少嵌套
const inject = (items, sections) => {
    const result = []
    items.forEach((item, arrayIndex) => {
        for (let section of sections) {
            const {content, index} = section
            if (index === arrayIndex) {
                result.push(content)
                break;
            }
        }
        result.push(item)
    })
    return result
}
export { inject };
