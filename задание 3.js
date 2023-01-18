function createObjNull() {
    const obj = Object.create(null);
    return obj
}

console.log(Object.getPrototypeOf(createObjNull()));