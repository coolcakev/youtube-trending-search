import axios from "axios";
import {YoutubeTrendingVideo} from "@/app/api/tranding/route";

export const fetchTrandingVideos = async (query: string):Promise<YoutubeTrendingVideo[]> => {
    const response = await axios.get('/api/tranding', {params: {
         query
    }});

    return response.data;
};

export const sendTrandingToTelegram = async (videos:YoutubeTrendingVideo[],telegramId:string) => {
    await axios.post('/api/send-to-telegram', {videos,telegramId});
}
