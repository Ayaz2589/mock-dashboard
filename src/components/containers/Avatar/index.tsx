import React, { useState } from 'react';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: number;
  fallbackSrc: string;
  onClick?: () => void;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 50,
  fallbackSrc,
  onClick,
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    objectFit: 'cover' as const,
    display: 'block',
  };

  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
      <img src={imageSrc} alt={alt} style={style} onError={handleError} />
    </button>
  );
};

export default Avatar;
