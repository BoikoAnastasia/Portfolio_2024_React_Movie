import React from "react"

export default class ApiMovie {

    static async getMovieRequest(searchValue) {
        try {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2f38094d`

            const response = await fetch(url);
            const resposeJson = await response.json();
            return resposeJson.Search;
        }
        catch (error) {
            alert("Ошибка")
            return error.message(`ошибка ${error}`);
        }
    }
}