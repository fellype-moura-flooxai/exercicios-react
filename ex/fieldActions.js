export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'CHANGE_VALUE',
        payload: e.target.value
    }
}
