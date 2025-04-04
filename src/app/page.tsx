"use client";
import {useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {fetchTrandingVideos, sendTrandingToTelegram} from "@/api/youtubeTrending.api";
import VideoCard from "@/components/VideoCard";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import {handleApiError} from "@/helpers/api.helper";
import {YoutubeTrendingVideo} from "@/app/api/tranding/route";
import {useLoading} from "@/hooks/useLoading";
import Loader from "@/ui/Loader";

export default function Home() {
    const [videos, setVideos] = useState<YoutubeTrendingVideo[]>([]);
    const {loading, executeWithLoading} = useLoading();

    const fetchVideos = async (searchQuery: string) => {
        handleApiError(async () => {
            const response = await fetchTrandingVideos(searchQuery);
            setVideos(response);
        })
    };

    const sendToTelegram = async () => {
        executeWithLoading(() => handleApiError(() => sendTrandingToTelegram(videos)))
    }

    const debounced = useDebouncedCallback(
        async (searchQuery) => {
            if (searchQuery.trim() !== '') {
                await fetchVideos(searchQuery);
            }
        },
        // delay in ms
        500
    );

    const handleKeyWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value;
        debounced(searchQuery);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">YouTube Trending Search</h1>
            <div className="flex justify-between w-[50%] gap-5 items-center">
                <Input
                    type="text"
                    placeholder="Enter a keyword..."
                    onChange={handleKeyWordChange}
                    className="flex-3"
                />
                {videos.length > 0 && (<Button onClick={sendToTelegram} >
                    {"Send to Telegram"}
                </Button>)}
            </div>
            <div className="p-4 w-[40%] mx-auto">


                {loading && <Loader/>}

                <div className="grid grid-cols-1 gap-4 mt-4 w-full">
                    {videos.map(video => (
                        <VideoCard key={video.id} {...video} />
                    ))}
                </div>


            </div>
        </div>
    )
        ;
}
