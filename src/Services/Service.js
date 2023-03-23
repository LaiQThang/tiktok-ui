import * as httRequest from '~/utils/httRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httRequest.get('users/search?', {
            params: {
                q: q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const suggestedUserList = async (q) => {
    try {
        const res = await httRequest.get('users/suggested?', {
            params: {
                page: q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const FollowingUserList = async (q, p = 5) => {
    try {
        const res = await httRequest.get('users/suggested?', {
            params: {
                page: q,
                per_page: p,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
