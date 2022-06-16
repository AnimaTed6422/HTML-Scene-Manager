# HTML Scene Manager Docs

A demo is `SceneDemo.html`.

First, let's import the JS into the Website.

You can either Download the file and import it.
```html
<script src="SceneManager.js"></script>
```
orrr......
If you don't want to download it, and take up space on YOUR hard drive, It's public on github, so you can load it in that way.
```html
<script src="https://raw.githubusercontent.com/AnimaTed6422/HTML-Scene-Manager/main/SceneManager.js"></script>
```

Okay, we have the file, now how do I load a scene?
All scenes will be hidden if not loaded by default, so set the First Scene to show as a scene with
```javascript
document.addEventListener("DOMContentLoaded", () => { setFirstScene(getSceneObject('loadingscreen')); });
```
**We're also adding an event listener because otherwise, it will set the scene before the script is loaded in and the script will hide the first scene as well.**
Hence we need the event listener

To load in a scene now, use
```javascript
LoadScene({Element Scene});
```

Just put the Elements in a `<scene>` element. **It acts like a div**

to get a Scene by a name attribute, use:
```javascript
getSceneObject({String name});
```

Have fun using this lib, and
Happy Coding!
