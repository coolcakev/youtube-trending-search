import axios from "axios";
import {NextResponse} from "next/server";
import {handleApiError} from "@/backendHelper/backend.helper";

export interface YoutubeTrendingVideo {
    title: string;
    thumbnailUrl: string;
    url: string;
    id: string;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
        return NextResponse.json([]);
    }

    return handleApiError(async ()=>{
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 10,
                key: process.env.YOUTUBE_API_KEY,
            },
        });

        const videos: YoutubeTrendingVideo[] = response.data.items.map((item: any) => ({
            title: item.snippet.title,
            thumbnailUrl: item.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            id: item.id.videoId,
        }));
        return videos;
    },"Failed to fetch videos from Youtube")
}
