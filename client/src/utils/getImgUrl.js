const getImgUrl = (name) => {
  return new URL(`../assets/bags/${name}`, import.meta.url);
};
export const getBlogImgUrl = (name) => {
  return new URL(`../assets/blogs/${name}`, import.meta.url);
};

export default getImgUrl;
