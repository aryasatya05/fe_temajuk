import axios from 'axios';

export interface Destinasi {
  id: number;
  place: string;
  desc: string;
  alamat: string;
  time: string;
  price: number;
  facility: string[];
  activity: string[];
  tips: string;
  created_at: string;
  updated_at: string;
}

const API_URL = 'http://127.0.0.1:8000/api/destinasi';

export const getDestinasi = async (): Promise<Destinasi[]> => {
  try {
    const response = await axios.get<Destinasi[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data destinasi:', error);
    return [];
  }
};
