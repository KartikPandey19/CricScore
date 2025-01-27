const apiKey = import.meta.env.VITE_CRIC_API_KEY
export const ApiEndPoints ={
    GetCurrentMatches:`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`,
}