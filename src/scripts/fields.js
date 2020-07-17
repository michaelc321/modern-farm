const plantArr = []

export const addPlant = (seed) => {
    if(Array.isArray(seed)) {
        seed.forEach(corn => {
            plantArr.push(corn)
        })
    } else plantArr.push(seed)
}

export const usePlants = (arr) => {
    return plantArr.slice()
}
