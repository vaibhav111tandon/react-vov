# Vov React Component

A simple React wrapper for applying **VOV.css animations**. The `Vov` component allows you to easily add animations to your elements with customizable duration and delay.

## Features
- Declarative animations using `VOV.css`.
- Customizable animation duration and delay.
- Automatically handles animation cleanup.
- Callback support for when the animation ends.

---

## Installation

1. Install **VOV.css** in your project:
   ```bash
   npm install vov.css
   ```

2. Copy or use the provided `Vov` component in your project.

---

## Usage

### Basic Example

```jsx
import React from "react";
import Vov from "./Vov";

const App = () => (
  <div>
    <Vov animation="zoom-in-up" duration="2s">
      <h1>Hello, VOV!</h1>
    </Vov>
  </div>
);

export default App;
```

### Props

| Prop            | Type       | Default | Description                               |
|-----------------|------------|---------|-------------------------------------------|
| `animation`     | `string`   | N/A     | Name of the **VOV.css** animation to apply. |
| `duration`      | `string`   | `1s`    | Duration of the animation (e.g., `2s`, `500ms`). |
| `delay`         | `string`   | `0s`    | Delay before the animation starts (e.g., `1s`). |
| `children`      | `ReactNode`| N/A     | The content to be animated.               |
| `onAnimationEnd`| `function` | N/A     | Callback fired when the animation ends.   |

---

### Advanced Example: Handling Animation End

```jsx
import React, { useState } from "react";
import Vov from "./Vov";

const App = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleAnimationEnd = () => {
    alert("Animation finished!");
  };

  return (
    <div>
      <button onClick={() => setAnimationTriggered(true)}>Trigger Animation</button>
      {animationTriggered && (
        <Vov animation="fadeIn" duration="1.5s" onAnimationEnd={handleAnimationEnd}>
          <p>This text fades in!</p>
        </Vov>
      )}
    </div>
  );
};

export default App;
```

---

### Styling with VOV.css

To ensure the animations work correctly, include the **VOV.css** styles in your project:
```javascript
import "vov.css"; // Add VOV.css animations
```

---

## Notes

- Make sure your animation names match those defined in **VOV.css**.
- Use `onAnimationEnd` to perform actions after an animation finishes.

---

## License

MIT License

---

Feel free to expand or customize this `README.md` as per your project's needs! Let me know if you'd like additional examples or adjustments.