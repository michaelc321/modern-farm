import {createAsparagues} from "./seeds/asparagues.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"

const asparagues = createAsparagues()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()



const cropHolder = []
export const addPlant = (seedObj) => {
    cropHolder.push(seedObj)
}

export const usePlants = () => {
    return cropHolder
}

addPlant(asparagues)
addPlant(corn)
addPlant(potato)
addPlant(soybean)
addPlant(sunflower)
addPlant(wheat)

