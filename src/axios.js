import axios from "axios";
const instance = axios.create({
	// baseURL: 'http://127.0.0.1:5001/clone-7d3c0/us-central1/api ',
	baseURL: 'http://127.0.0.1:5500',
});

export default instance;
