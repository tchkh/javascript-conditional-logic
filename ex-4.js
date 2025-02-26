//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

// Start coding here.
if (lightBulbStatus === "On") {
    console.log("Light bulb is On.")
}   else if (lightBulbStatus === "Off") {
    console.log("Light bulb is Off.")
}   else if (lightBulbStatus === "Broken") {
    console.log("Light bulb is Broken.")
}   else {
    console.log("Please choose the correct input (On/Off/Broken)")
}

switch (lightBulbStatus) {
    case "On":
        "Light bulb is On.";
        break;
    case "Off":
        "Light bulb is Off.";
        break;
    case "Broken":
        "Light bulb is Broken.";

}

console.log(lightBulbStatus);