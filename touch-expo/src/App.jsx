import { useState } from 'react';
import TouchPoint from './components/TouchPoint';
import VideoPlayer from './components/VideoPlayer';

// Sample touch points data - can be modified for different layouts
const TOUCH_POINTS = [
  {
    id: 1,
    x: 20,
    y: 30,
    videoUrl: 'https://www.example.com/video1.mp4', // Replace with actual video URL
  },
  {
    id: 2,
    x: 50,
    y: 60,
    videoUrl: 'https://www.example.com/video2.mp4', // Replace with actual video URL
  },
  {
    id: 3,
    x: 80,
    y: 40,
    videoUrl: 'https://www.example.com/video3.mp4', // Replace with actual video URL
  },
];

function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleTouchPointActivate = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20" />
      
      {/* Main content container */}
      <main className="relative w-full h-screen">
        {/* Touch points */}
        {TOUCH_POINTS.map((point) => (
          <TouchPoint
            key={point.id}
            x={point.x}
            y={point.y}
            videoUrl={point.videoUrl}
            onActivate={handleTouchPointActivate}
          />
        ))}

        {/* Instructions overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
          <p className="text-lg font-light">
            Touch the interactive points to explore
          </p>
        </div>

        {/* Video player */}
        <VideoPlayer
          videoUrl={activeVideo}
          isOpen={!!activeVideo}
          onClose={handleCloseVideo}
        />
      </main>
    </div>
  );
}

export default App;
