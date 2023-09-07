// Importamos axios
import axios from 'axios';

// Creamos una instancia de axios
const axiosInstance = axios.create({
    baseURL: 'https://attendance-backend-php-production.up.railway.app/api/',
    timeout: 5000,
    // headers: {'Authorization': 'Bearer ' + token}
});

// Exportamos la instancia
export default axiosInstance;
