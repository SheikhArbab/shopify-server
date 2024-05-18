// image uploading imports
import path from 'path'; 
const __dirname = path.resolve();

/* CONVERTS DOB FORMAT FROM ISO 8601 (2000-11-27T19:00:00.000Z) TO YYYY-MM-DD (2000-11-28) */
export const dateFormatter = (value) => {
    const newDate = new Date(value);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const date = String(newDate.getDate()).padStart(2, '0');
    const time = `${year}-${month}-${date}`;
    return time;
};
 


export const url = (endpoint,id='') => `https://${process.env.API_KEY}:${process.env.API_PASSWORD}@${process.env.HOSTNAME}.myshopify.com/admin/api/${process.env.version}/${endpoint}${id && `/${id}`}.json`
