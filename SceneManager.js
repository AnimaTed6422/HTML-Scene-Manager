const sceneElements = document.getElementsByTagName('scene');
var sceneNodes = Array.prototype.slice.call(sceneElements);
var currentScene;

sceneNodes.forEach(element => {
    element.style.display = "none";
});

const getSceneObject = (name) => {
    return document.getElementsByName(name)[0];
}

const getSceneObjectById = id => {
    return document.getElementById(id);
}

const LoadScene = scene => {
    currentScene.style.display = "none";
    currentScene = scene;
    scene.style.display = "block";
}

const setFirstScene = (scene) => {
    currentScene = scene;
    scene.style.display = "block";
}