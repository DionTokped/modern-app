import { Await, useLoaderData, useNavigate } from '@modern-js/runtime/router';
import Button from 'federation_provider/button';
import type { Posts } from './page.data';
import '../index.css';
import { Suspense } from 'react';

const Blog = () => {
  const { data } = useLoaderData() as Posts;

  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <h3 className="text-3xl py-3 text-center">Blog List</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data}>
          <div className="grid grid-flow-col grid-rows-4 mt-4 gap-2">
            {data.map((item, idx) => {
              return (
                <a
                  key={item.userId}
                  onKeyDown={() => navigate('/')}
                  href="/"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.body}
                  </p>
                </a>
              );
            })}
          </div>
        </Await>
      </Suspense>
    </div>
  );
};

export default Blog;
