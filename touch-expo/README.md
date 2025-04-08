# Touch-Interactive Content Player

A responsive, touch-friendly content player built with Vite, React, and Tailwind CSS. Perfect for auto-expo style interactive displays and touch-based presentations.

## Features

- 🎯 Interactive touch points
- 🎥 Responsive video playback
- 📱 Mobile-optimized interactions
- ♿ Accessibility support
- 🎨 Customizable themes
- 🔄 Smooth animations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization Points

### Touch Point Positioning

Modify the `TOUCH_POINTS` array in `src/App.jsx`:

```javascript
const TOUCH_POINTS = [
  {
    id: 1,
    x: 20, // X position as percentage
    y: 30, // Y position as percentage
    videoUrl: 'path/to/video.mp4'
  }
  // Add more touch points as needed
];
```

### Theme Customization

Update colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0F172A',    // Background color
      secondary: '#3B82F6',  // Touch point color
      accent: '#10B981'      // Highlight color
    }
  }
}
```

### Video Player Configuration

Adjust video player settings in `src/components/VideoPlayer.jsx`:

```javascript
<ReactPlayer
  url={videoUrl}
  width="100%"
  height="100%"
  controls
  playing
  playsinline
  config={{
    file: {
      attributes: {
        controlsList: 'nodownload',
        disablePictureInPicture: true,
      }
    }
  }}
/>
```

### Layout Adjustments

Modify the layout in `src/index.css`:

```css
@layer components {
  .touch-point {
    @apply w-12 h-12; /* Size of touch points */
  }
  
  .video-container {
    @apply w-full max-w-4xl; /* Video player size */
  }
}
```

### Animation Timing

Update animations in components:

- Touch points: Modify Framer Motion settings in `TouchPoint.jsx`
- Video overlay: Adjust transitions in `VideoPlayer.jsx`

## Best Practices

1. Use high-quality, compressed videos for optimal performance
2. Test touch interactions on target devices
3. Ensure sufficient contrast for touch points
4. Maintain responsive design across screen sizes
5. Consider network conditions for video loading

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with touch support

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request
