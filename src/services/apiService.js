// src/services/apiService.js
const API_URL = 'http://your-backend-url/api/messages'; // Changez cela par l'URL réelle de votre API

const fetchMessages = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error( `HTTP error! status: ${response.status}` );
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch messages:', error);
        throw error;
    }
}

export default {
    fetchMessages
};