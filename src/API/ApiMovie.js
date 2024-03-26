export const getMovieRequest = async (searchValue) => {
    try {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2f38094d`;
        const response = await fetch(url);
        const resposeJson = await response.json();
        return resposeJson.Search;
    } catch (error) {
        alert("Ошибка");
        return error.message(`ошибка ${error}`);
    }
};

export const getMovie = async (title) => {
    const titleChange = title.replace(/ /g, "+");
    console.log(titleChange);
    try {
        const url = `http://www.omdbapi.com/?t=${titleChange}&apikey=2f38094d`;
        const response = await fetch(url);
        const resposeJson = await response.json();
        return resposeJson;
    } catch (error) {
        alert("Ошибка");
        return error.message(`ошибка ${error}`);
    }
    
}
