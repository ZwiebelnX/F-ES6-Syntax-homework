// TODO 使用解构的方式取出data与column
const parseData = (input) => {
    // TODO 不需要声明一个[], 可以用map直接进行list转化
    const result = []
    input.data.forEach(array => {
        let columnObj = {}
        // TODO 不需要单独声明index, 可以查一下forEach内函数的第二个参数就是index
        let arrayIndex = 0
        input.column.forEach(column => {
            columnObj[column.name] = array[arrayIndex]
            arrayIndex++
        })
        result.push(columnObj)
    })
    return result;
}
export { parseData };
