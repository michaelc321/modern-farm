import {createPlan} from "./plan.js"
import {createAsparagues} from "./seeds/asparagues.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {usePlants} from "./fields.js"

const asparagues = createAsparagues()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()
const yearlyPlan = createPlan()
const addPlants = usePlants()

console.log(asparagues)
console.log(corn)
console.log(potato)
console.log(soybean)
console.log(sunflower)
console.log(wheat)
console.log(yearlyPlan)
console.log(addPlants)