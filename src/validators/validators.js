export const requiredField = (val) => {
    return val ? undefined : 'Field is required'
}

export const isHex = (val) => {
    return (val.match(/^#([a-f0-9]{6}|[a-f0-9]{3})$/gi)) ? undefined : 'Incorrect input data'
}