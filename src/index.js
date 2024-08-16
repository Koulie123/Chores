import Chore from "./modules/chore.js";

let choresList = [];
choresList.push(new Chore("test", "test desc", "testLongDesc"));
const toBeReplaced = document.querySelector("#toBeReplaced");
if (toBeReplaced == null) {
  console.log("to be replaced is null");
} else {
  console.log("to be replaced is not null");
}
toBeReplaced.textContent = choresList[0].name;

//TODO create a list of 4 sets of chores
let choreGroups = [];
//Chores - Mopping and Sweeping/vacuuming, wipe down the kitchen, wipe down the bathrooms, Empty garbages, recycling and compost
let moppingAndVaccumingChores = [
  new Chore(
    "Mopping the floors",
    "Use the mop and bucket from the basement to clean the 1st floor, second floor and stairs.",
    "empty",
  ),
  new Chore(
    "Vacuuming",
    "Use the Vacuum and or broom to clean the floors and carpets. If the vacuum is getting full, please empty it into the garbage",
    "empty",
  ),
];
let kitchenChores = [
  new Chore(
    "Clean Kitchen",
    "Wipe down all surfaces in the kitchen, as well as cleaning the sink and microwave.",
    "If we are low on any cleaning products please let Koulie know.",
  ),
];
let bathroomChores = [
  new Chore(
    "Clean Bathrooms",
    "Please clean the sink toilet and tub in the upstairs bathroom. Downstairs bathroom should be clean if it looks dirty but is not necessart if it looks clean.",
    "If we are low on any cleaning products please let Koulie know.",
  ),
];
let garbageChores = [
  new Chore(
    "Garbage, recycling and compost",
    "Please empty the Garbage, recycling and compost throughout the week as needed",
    "",
  ),
];
choreGroups.push(moppingAndVaccumingChores);
choreGroups.push(kitchenChores);
choreGroups.push(bathroomChores);
choreGroups.push(garbageChores);
