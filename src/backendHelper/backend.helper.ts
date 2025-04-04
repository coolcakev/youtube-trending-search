import {NextResponse} from "next/server";

export const handleApiError = async (func: () => Promise<any>, errorMessage: string = 'Something went wrong. Please try again later.') => {
    try {
        const response = await func();
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
};
