"use client";
import { TikTokEmbed } from "react-social-media-embed";

interface TikTokEmbedProps {
  url: string;
}

const TikTokEmbedComponent: React.FC<TikTokEmbedProps> = ({ url }) => {
  return (
    <div className='flex justify-center'>
      <TikTokEmbed url={url} width={325} />
    </div>
  );
};

export default TikTokEmbedComponent;
