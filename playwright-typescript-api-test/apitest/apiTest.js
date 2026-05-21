const { request } = require('playwright');

(async () => {
  // Create a new APIRequestContext
  const apiRequestContext = await request.newContext();

  // Test: GET /posts
  const getResponse = await apiRequestContext.get('https://jsonplaceholder.typicode.com/posts');
  console.log('GET /posts status:', getResponse.status());
  const posts = await getResponse.json();
  console.log('Number of posts:', posts.length);

  // Test: POST /posts
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  const postResponse = await apiRequestContext.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost
  });
  console.log('POST /posts status:', postResponse.status());
  const createdPost = await postResponse.json();
  console.log('Created post ID:', createdPost.id);

  // Test: PUT /posts/1
  const updatedPost = {
    id: 1,
    title: 'foo updated',
    body: 'bar updated',
    userId: 1
  };
  const putResponse = await apiRequestContext.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: updatedPost
  });
  console.log('PUT /posts/1 status:', putResponse.status());
  const modifiedPost = await putResponse.json();
  console.log('Modified post title:', modifiedPost.title);

  // Test: DELETE /posts/1
  const deleteResponse = await apiRequestContext.delete('https://jsonplaceholder.typicode.com/posts/1');
  console.log('DELETE /posts/1 status:', deleteResponse.status());

  // Close the APIRequestContext
  await apiRequestContext.dispose();
})();
