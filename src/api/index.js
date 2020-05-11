/* eslint-disable prettier/prettier */
import axios from "axios";

export async function getPosts() {
  try {
    const response = await axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/devgiordane.wordpress.com/posts"
    );
    return response.data.posts;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
export async function getPost(postSlug) {
  try {
    const response = await axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/devgiordane.wordpress.com/posts/?slug=${postSlug}`
    );
    return response.data.posts[0];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
export async function getPostCat(cat) {
  try {
    const response = await axios.get(
      `https://public-api.wordpress.com/rest/v1.1/sites/devgiordane.wordpress.com/posts/?category=${cat}`
    );
    return response.data.posts;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
