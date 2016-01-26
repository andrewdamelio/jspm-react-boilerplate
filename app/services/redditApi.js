import jsonp from 'jsonp';

class RedditApi {
  constructor() {
    this.redditUrl =
      'https://www.reddit.com/r/perfectloops/top.json?sort=top&t=all&jsonp=callbackFunction';
  }

  load() {
    return new Promise((resolve, reject) => {
      jsonp(this.redditUrl, {
        param: 'jsonp',
      }, (err, data) => {
        err ? reject(err) : resolve(data.data.children);
      });
    });
  }
}

export default new RedditApi;
