const url = `https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`;

export const ourAPI = {
  getItems() {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  },
};
