export const handleApiError = async (func:()=>Promise<void>) => {
    try {
        await func();
    }catch (e) {
        console.error('API Error:', e);
        alert('Something went wrong. Please try again later.');
    }
};
