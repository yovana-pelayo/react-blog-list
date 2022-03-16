import { checkError, client } from './client';

export default async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}
