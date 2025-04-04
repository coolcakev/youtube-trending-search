import React from 'react';
import Card from "@/ui/Card";

interface VideoCardProps {
    title: string;
    thumbnailUrl: string;
    url: string;
}

const VideoCard = (props: VideoCardProps) => {
    const { title, thumbnailUrl, url } = props;

    const handleCardClick = () => {
        window.open(url, '_blank');
    };

    return (
        <Card className="flex items-center p-2 shadow-lg hover:shadow-2xl transition" onClick={handleCardClick}>
            <img src={thumbnailUrl} alt={title} className="rounded-xl mr-4 w-20 h-20"/>
            <h2 className="text-lg font-semibold truncate w-full">{title}</h2>
        </Card>
    );
};

export default VideoCard;
