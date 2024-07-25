// src/utils/fetchNews.js
import axios from 'axios';

const API_KEY = '3fba854168754303bb78aab366b8aa02';  
const API_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        apiKey: API_KEY,
        language: 'es',
        sortBy: 'publishedAt'
      }
    });
    return response.data.articles.filter(article => article.urlToImage); // Filtrar noticias que tienen imagen
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

