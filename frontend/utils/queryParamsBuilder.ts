import { TSearchParams } from "./types";

export const queryParamsBuilder = (params: TSearchParams) => {
    let query = "?";
    
    Object.entries(params).forEach(([key, value]) => {
        query += `${key}=${value} `;
    })

    return query.trim().replaceAll(" ", "&");
}