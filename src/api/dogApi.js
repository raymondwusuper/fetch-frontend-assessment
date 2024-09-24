import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
});
export const getBreeds = async () => {
    try {
        const response = await api.get('/breeds');
        return response.data;
    } catch (error) {
        console.error('Error fetching breeds:', error);
        return [];
    }
};
export const getBreedImages = async (breedId, limit = 10) => {
    try {
        const response = await api.get(`/images/search?breed_id=${breedId}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching breed images:', error);
        return [];
    }
};