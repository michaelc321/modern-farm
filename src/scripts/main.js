import { createPlan } from "./plan.js";
import { usePlants } from "./fields.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan()
const seedToPlant = plantSeeds(yearlyPlan)
const plantArr = usePlants()
const seedsArr = harvestPlants(plantArr)
catalog(seedsArr)