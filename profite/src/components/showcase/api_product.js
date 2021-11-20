const basicFetch = async () => {
    const req = await fetch('http://localhost:6070/product/', {method: 'get', headers: {'Accept': 'application/json'}});
    const json = await req.json();

    return json;
}

export default {
    getProducts: async () => {
        return await basicFetch()
    }
}