import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';

/**
 * VideoPlayer Component
 * Handles video playback in a modal overlay with touch-friendly controls
 * 
 * @param {Object} props
 * @param {string} props.videoUrl - URL of the video to play
 * @param {boolean} props.isOpen - Whether the video player is open
 * @param {function} props.onClose - Callback function to close the video player
 */
const VideoPlayer = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="video-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div 
          className="video-container"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close video"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer;