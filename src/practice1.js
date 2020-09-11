const parseData = (input) => {
    const result = []
    input.data.forEach(array => {
        let columnObj = {}
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
