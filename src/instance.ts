import axios from 'axios';
import { env } from 'process';

export const instance = axios.create({
    baseURL: env.REACT_APP_LINK
});