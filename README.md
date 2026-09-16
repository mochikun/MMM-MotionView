# MMM-MotionView

A MagicMirror module that displays a camera stream focused [Motion](https://motion-project.github.io) with configurable dimensions and cropping.

## Installation

1. Navigate to the MagicMirror modules directory:
   ```
   cd ~/MagicMirror/modules
   ```

2. Clone this repository:
   ```
   git clone https://github.com/your-repo/MMM-MotionView.git
   ```

## Configuration

Add the following to your `config.js` file:

```javascript
{
    module: "MMM-MotionView",
    position: "top_right",
    config: {
        width: 640,
        height: 480,
        x: 100,
        y: 50,
        url: "http://localhost:8080/stream",
        refreshInterval: 1000
    }
}
```

### Configuration Options

| Option | Description |
|--------|-------------|
| `width` | Width of the display area (default: 640) |
| `height` | Height of the display area (default: 480) |
| `x` | X position for cropping (default: 0) |
| `y` | Y position for cropping (default: 0) |
| `url` | URL of the camera stream (default: "http://localhost:8080/stream") |
| `refreshInterval` | Interval to refresh the display (default: 1000) |

## Features

- Configurable display dimensions
- Cropping functionality to show center portion of the stream
- Responsive design
- Simple and lightweight implementation

## Requirements

- MagicMirror v2 or higher
- A camera stream accessible via HTTP
