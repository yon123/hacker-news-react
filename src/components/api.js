import axios from "axios";

const api = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";

export function getItems(id) {
  return axios.get(`${api}item/${id}${json}`);
}

export function getNewPosts() {
  return axios
    .get(`${api}newstories${json}`)
    .then(res => {
      return res.data;
    })
    .then(ids => {
      return ids.slice(0, 50);
    })
    .then(ids => {
      return axios
        .all(ids.map(getItems))
        .then(list => list.map(({ data }) => data));
    });
}
getNewPosts();

export function getTopPosts() {
  return axios
    .get(`${api}topstories${json}`)
    .then(res => {
      // console.log(res.data);
      return res.data;
    })
    .then(ids => {
      return ids.slice(0, 50);
    })
    .then(ids => {
      return axios
        .all(ids.map(getItems))
        .then(list => list.map(({ data }) => data));
    });
}
// getTopPosts();

export function getUser(id) {
  return axios.get(`${api}user/${id}${json}`).then(res => {
    console.log(res.data, "from api js");
    return res.data;
  });
}
// getUser();

export function getAllPosts(ids) {
  return axios
    .all(ids.map(getItems))
    .then(posts => posts.map(({ data }) => data));
}
// getAllPosts();
export function getAllComments(ids) {
  return axios
    .all(ids.map(getItems))
    .then(posts => posts.map(({ data }) => data));
}

// getAllComments();

export function getComments(id) {
  return axios.get(`${api}item/${id}${json}`).then(res => {
    console.log(res.data);
    return res.data;
  });
}
// getComments();
