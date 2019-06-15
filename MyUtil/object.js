/**
*   获取某一对象及其原型链上所有指定前缀或后缀的属性集合
*/
function findFields(instance, prefix, suffix) {
    function _findFields(instance) {
        if (instance === null) {
            return
        }
        var names = Object.getOwnPropertyNames(instance)
        let res = names.filter(item => check(item))
        let otherRes = _findFields(Object.getPrototypeOf(instance))
        return [...res, ...(otherRes||[])]
    }
    function check(name) {
        return name.startsWith(prefix) || name.endsWith(suffix)
    }
    return _findFields(instance)
}
let names = findFields([], 's', 'Of')
console.log(names);
