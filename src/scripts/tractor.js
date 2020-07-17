import { createWheat } from "./seeds/wheat.js";
import { createAsparagues } from "./seeds/asparagues.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./fields.js";

export const plantSeeds = (plan) => {
    for(var i = 0; i < plan.length; i++) {
        for(var j = 0; j < plan[i].length; j++) {
            if(plan[i][j] === "asparagues") {
                addPlant(createAsparagues())
            }
            if(plan[i][j] === "sunflower") {
                addPlant(createSunflower())
            }
            if(plan[i][j] === "soybean") {
                addPlant(createSoybean())
            }
            if(plan[i][j] === "potato") {
                addPlant(createPotato())
            }
            if(plan[i][j] === "corn") {
                addPlant(createCorn())
            }
            if(plan[i][j] === "wheat") {
                addPlant(createWheat())
            }
        }
    }
}