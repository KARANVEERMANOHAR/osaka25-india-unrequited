import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * TouchPoint Component
 * Represents an interactive touch point on the screen that triggers video playback
 * 
 * @param {Object} props
 * @param {number} props.x - X coordinate for positioning
 * @param {number} props.y - Y coordinate for positioning
 * @param {string} props.videoUrl - URL of the video to play
 * @param {function} props.onActivate - Callback function when touch point is activated
 */
const TouchPoint = ({ x, y, videoUrl, onActivate }) => {
  return (
    <motion.div
      className="touch-point"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onActivate(videoUrl)}
      role="button"
      tabIndex={0}
      aria-label="Interactive touch point"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onActivate(videoUrl);
        }
      }}
    >
      <div className="w-3 h-3 bg-white rounded-full" />
    </motion.div>
  );
};

TouchPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  videoUrl: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default TouchPoint;