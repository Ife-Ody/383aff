export async function fetchPosts(page) {
  const response = await fetch(
    `http://private-cc77e-aff.apiary-mock.com/posts?${page}`
  );
    const data = response.json().then(data =>data.items);
    return data
}
