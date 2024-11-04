
# Three.js Cube Scene with Orbit Controls

This project sets up a basic 3D scene using [Three.js](https://threejs.org/) to render a red cube with ambient and directional lighting. The scene includes OrbitControls for interactive viewing, allowing users to rotate the camera around the object.

## Features
- 3D cube with red color and lighting.
- Ambient and directional lights to enhance the visual.
- OrbitControls for easy navigation around the scene.
- Grid helper for reference positioning in the 3D space.

## Installation

To get started with this project, ensure you have Node.js installed and then install `three` as a dependency:

```bash
npm install three
```

## Project Structure

- **canvas tag**: Targeted for rendering the 3D scene.
- **Scene**: Holds all the objects, lights, and other elements.
- **Camera**: Positioned to view the scene from an angle.
- **Renderer**: Renders the scene within the `canvas`.
- **Cube**: A simple red 3D cube is the focal point of the scene.
- **Lighting**: Ambient and directional lights are added to highlight the cube.
- **Controls**: `OrbitControls` enables user interaction with the scene by rotating the camera.
- **GridHelper**: Provides a visual reference grid beneath the cube.

## Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open `index.html` in a browser, or run a local server with a bundler like Webpack, Vite, or Parcel.

## Code Overview

The key elements of the code include:

1. **Canvas Selection**: Selects the `canvas` tag to render the scene.
   ```javascript
   const canvas = document.querySelector("canvas#webgl");
   ```

2. **Scene and Camera Setup**:
   - Creates a `THREE.Scene()` with a gray background.
   - Sets up a `PerspectiveCamera` with a field of view of 35, positioned to view the cube.
   
3. **Renderer Configuration**:
   - Configures `THREE.WebGLRenderer` with antialiasing.
   - Sets the renderer’s size and pixel ratio.

4. **Object and Material**:
   - Defines a red `BoxGeometry` cube and adds it to the scene.

5. **Lighting**:
   - Adds ambient and directional lighting to give the cube a shaded effect.

6. **Controls**:
   - Enables orbit controls for camera manipulation.
   
7. **Animation Loop**:
   - Uses `requestAnimationFrame` to animate the scene and render each frame.

```javascript
function animate() {
    window.requestAnimationFrame(animate);
    controls.update();
    camera.lookAt(cube.position);
    renderer.render(scene, camera);
}
animate();
```

## Contributing

Feel free to fork the repository, submit issues, or make pull requests to enhance the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Replace `"username/repository-name"` with your actual GitHub username and repository name where applicable. This README provides an overview of the project, installation instructions, and a breakdown of the main code sections.