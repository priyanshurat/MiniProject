// ClothReset.js
// Version: 0.1.0
// Event: Lens Tapped
// Description: Reset Cloth Simulation on tap

// @input Component.ClothVisual clothVisual

if (!script.clothVisual) {
    print("ERROR: Make sure to assign Cloth Visual Component");
    return;
}
    
if (script.clothVisual.getSceneObject().enabled) {
    script.clothVisual.resetSimulation();
    print("Reset UI cloth simiulation on tap");   
}


