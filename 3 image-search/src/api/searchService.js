import axios from 'axios';
const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
        q: '',
        pageNumber: '1',
        pageSize: '100',
        autoCorrect: 'true'
    },
    headers: {
        'X-RapidAPI-Key': '835a50a562mshadf1f3ffd2b712ep194e42jsn3d961a052b84',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};

export async function searchImage(queryString) {
    try {
        options.params.q = queryString;
        let response = await axios.request(options)
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
