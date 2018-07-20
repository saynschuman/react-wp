export function arrToMap(array) {
    return array.reduce(function(acc, cur) {
        acc[cur.id] = cur
        return acc
    }, {})
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}