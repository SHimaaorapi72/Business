import React, { useState, useEffect } from 'react';

const Notification = ({ message, duration = 1000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded  z-50">
      {message}
    </div>
  );
};

export default Notification;