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
