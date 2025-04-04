import {useState} from "react";

export const useLoading = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true)
        document.body.style.overflow = 'hidden';
    };
    const stopLoading = () => {
        setLoading(false)
        document.body.style.overflow = 'unset';
    };

    const executeWithLoading = async (asyncFunction: () => Promise<any>) => {
        startLoading();
        try {
            await asyncFunction();
        } finally {
            stopLoading();
        }
    };

    return { loading, executeWithLoading };
};
