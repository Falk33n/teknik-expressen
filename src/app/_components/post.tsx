'use client';

import { api_client } from '@/trpc';
import { useState } from 'react';

export function LatestPost() {
  const [latestPost] = api_client.post.getLatest.useSuspenseQuery();

  const utils = api_client.useUtils();
  const [name, setName] = useState('');
  const createPost = api_client.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName('');
    },
  });

  return (
    <div className='w-full max-w-xs'>
      {latestPost ? (
        <p className='truncate'>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className='flex flex-col gap-2'
      >
        <input
          type='text'
          placeholder='Title'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='px-4 py-2 rounded-full w-full text-black'
        />
        <button
          type='submit'
          className='bg-white/10 hover:bg-white/20 px-10 py-3 rounded-full font-semibold transition'
          disabled={createPost.isPending}
        >
          {createPost.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
