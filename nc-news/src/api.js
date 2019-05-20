import Axios from "axios";

export const getArticles = () => {
  const articleUrl = "https://nc-news808.herokuapp.com/api/articles";
  return Axios.get(articleUrl).then(({ data: { articles } }) => {
    return articles;
  });
};

export const sortArticles = sort_by => {
  const url = `https://nc-news808.herokuapp.com/api/articles?sort_by=${sort_by}`;
  return Axios.get(url).then(({ data: { articles } }) => {
    console.log(articles);
    return articles;
  });
};

export const getArticleById = articleid => {
  const articleUrl = `https://nc-news808.herokuapp.com/api/articles/${articleid}`;
  return Axios.get(articleUrl).then(({ data: { article } }) => {
    return article;
  });
};

export const getComments = article_id => {
  const commentUrl = `https://nc-news808.herokuapp.com/api/articles/${article_id}/comments`;
  return Axios.get(commentUrl).then(({ data: { comments } }) => {
    return comments;
  });
};

export const patchDataVote = (data_id, amount, data) => {
  const commentUrl = `https://nc-news808.herokuapp.com/api/${data}/${data_id}`;
  return Axios.patch(commentUrl, { inc_votes: amount });
};

export const delComment = comment_id => {
  const url = `https://nc-news808.herokuapp.com/api/comments/${comment_id}`;
  return Axios.delete(url);
};

export const addComment = (article_id, user, text) => {
  const url = `https://nc-news808.herokuapp.com/api/articles/${article_id}/comments`;
  return Axios.post(url, {
    username: user,
    body: text
  });
};

export const checkValidUser = user => {
  const url = `https://nc-news808.herokuapp.com/api/users/${user}`;
  return Axios.get(url).then(({ data: { user } }) => {
    console.log(user);
    return user;
  });
};

export const getTopics = () => {
  const topicUrl = "https://nc-news808.herokuapp.com/api/topics";
  return Axios.get(topicUrl).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticlesByTopic = slug => {
  const articleUrl = `https://nc-news808.herokuapp.com/api/articles?topic=${slug}`;

  return Axios.get(articleUrl).then(({ data: { articles } }) => {
    return articles;
  });
};
