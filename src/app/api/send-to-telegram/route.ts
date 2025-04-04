import axios from "axios";
import {YoutubeTrendingVideo} from "@/app/api/tranding/route";
import {handleApiError} from "@/backendHelper/backend.helper";

export async function POST(request: Request) {
    const { videos } = await request.json();

    return handleApiError(async () => {
        const message = videos.map((v:YoutubeTrendingVideo) => `${v.title}: https://www.youtube.com/watch?v=${v.id}`).join('\n');
        await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message
        });

        return "Videos sent to Telegram successfully!";
    },"Failed to send videos to Telegram");
}
