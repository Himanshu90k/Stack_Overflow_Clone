export const setcurrentuser = (data: any) => {
    return {
        type: "FETCH_CURRENT_USER",
        payload: data,
    };
};