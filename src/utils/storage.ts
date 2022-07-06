
const isJson = (str: string) => {
    let result = true
    try {
        JSON.parse(str)
    } catch (error) {
        result = false
    }
    return result
}

const setLocalStorage = (key: string, value: any) => {
    const saveString = JSON.stringify(value)
    localStorage.setItem(key, value)
}

const getLocalStorage = (key: string) => {
    const saveString = localStorage.getItem(key)
    if (saveString && isJson(saveString)) {
        return JSON.parse(saveString)
    }
    return null
}

export default {
    get: getLocalStorage,
    set: setLocalStorage
}