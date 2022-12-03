import Notiflix from "notiflix";

const axios = require('axios').default;

export async function fetchImages (imgName, currentPage) {

    const KEY = '31787922-9868af6ef14d155071060c1ed';
    const URL = 'https://pixabay.com/api/';
    const params = {
            key: `${KEY}`,
            q: imgName,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: 40,
            page: currentPage,
        };

    try {

        const response = await axios.get( URL, { params: params} );
        const result = await response.data;

        if (result.total === 0){

            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");

        } else {

            Notiflix.Notify.success (`Hooray! We found ${result.total} images.`)
            return result;
        }
        
        return result;    

    } catch (error) {
        
    }
}