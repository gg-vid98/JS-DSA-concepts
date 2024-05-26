function flattenObject(obj, prefix = '') {
    let flatObject = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // If the current value is an object, recursively flatten it
                let nestedObj = flattenObject(obj[key], prefix + key + '.');
                flatObject = { ...flatObject, ...nestedObj };
            } else {
                // If the current value is not an object, add it to the flat object
                flatObject[prefix + key] = obj[key];
            }
        }
    }
    return flatObject;
}
