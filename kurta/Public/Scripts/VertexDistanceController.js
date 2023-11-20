// VertexDistanceController.js
// Version: 0.1.0
// Event: Lens Initialized
// Description: Automatically determine loose vertices that
// can be simulated based on distance form skin.

// @input Component.ClothVisual clothVisual
// @input bool overrideVertexSettings = false
// @input float bindDistance = 0.7

function initialize() {

    if (!script.clothVisual) {
        print("ERROR: Please assign a Cloth Visual");
        return;
    }

    script.clothVisual.onInitialized = clothInitCallback;

}

function clothInitCallback(clothVisualArg) {

    if (script.overrideVertexSettings) {
        setFromVertexController(clothVisualArg);
    }
    
    clothVisualArg.resetSimulation();
}


function setFromVertexController(clothVisualArg) {
    
    var visData = script.clothVisual.mesh.extractVerticesForAttribute("externalMeshVisData");    

    for (var j = 0, k=0; j < visData.length; j+=2, k++) {         
        if (visData[j+1] < script.bindDistance) {                          
            clothVisualArg.setVertexBinding(k, script.getSceneObject());  
        }

    }
    
            
}

initialize();
