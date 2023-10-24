import axios from 'axios';

export const getProducts = async (cookieValue) => {
  try {
    const response = await axios.get('https://api.temp.com/products', { 
      headers: { 
        Cookie: cookieValue 
      } 
    });
    return response.data;
  } catch (error) {
    console.error(`Error occurred while fetching products: ${error}`);
    return [];
  }
}
