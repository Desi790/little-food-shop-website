
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
  width?: string;
  height?: string;
}

const VideoEmbed = ({
  videoId,
  title,
  thumbnailUrl,
  width = "100%",
  height = "100%",
}: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailImage = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
      {!isPlaying ? (
        <div className="absolute inset-0 bg-black">
          <img
            src={thumbnailImage}
            alt={`Thumbnail for ${title}`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Button
              onClick={handlePlay}
              variant="outline"
              size="lg"
              className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary border-none text-white"
              aria-label={`Play ${title}`}
            >
              <Play className="h-8 w-8 fill-current" />
            </Button>
            <p className="text-white font-medium text-lg mt-4 text-center px-4">{title}</p>
          </div>
        </div>
      ) : (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default VideoEmbed;
