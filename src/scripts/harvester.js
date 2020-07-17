export const harvestPlants = (plantsArr) =>{

const seedsArr = []

for(const plant of plantsArr) {
    if(plant.type === "asparagues") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    } else if(plant.type === "corn") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    } else if(plant.type === "potato") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    } else if(plant.type === "wheat") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    } else if(plant.type === "soybean") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    } else if(plant.type === "sunflower") {
        for(let i = 0; i < plant.output; i++) {
            seedsArr.push(plant)
        }
    }
}
    return seedsArr
}