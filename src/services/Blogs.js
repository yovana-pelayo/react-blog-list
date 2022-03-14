import { checkError, client } from './client';

export default async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  console.log('first', resp);
  return checkError(resp);
}
