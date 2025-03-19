export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Posts = {
  data: Post[];
};

export const loader = async (): Promise<Posts> => {
  const resp = await fetch(
    'https://jsonplaceholder.typicode.com/users/1/posts?limit=10',
  );
  const response = await resp.json();

  return { data: response };
};
