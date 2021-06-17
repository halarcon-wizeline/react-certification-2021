export const searchYoutubeVideo = (query, mockupData = []) => {
  return new Promise((resolve, reject) => {
    console.log('[youtube] searchYoutubeVideo', query);
    let results = [];

    if (mockupData.length > 0) {
      console.log('[youtube] mockupData', mockupData.items);
      resolve(mockupData.items);
      return;
    }

    try {
      const request = window.gapi.client.youtube.search.list({
        q: query,
        type: 'video',
        maxResults: 21,
        part: 'snippet',
      });
      request.execute(function (response) {
        results = response.result;
        console.log('[youtube] searchYoutubeVideo', results.length, ' videos found');
        // console.log('[youtube] searchYoutubeVideo', results);
        resolve(results);
      });
    } catch (reason) {
      console.log(`Error: ${reason}`);
      reject(reason);
    }
  });
};
