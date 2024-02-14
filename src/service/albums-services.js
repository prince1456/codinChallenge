import client from "./client";
export const getRecentAlbums = async () => {
  return client({
    method: "Get",
    url: `/getAlbumList2?u=guest&p=guest&v=1.12.0&f=json&c=test&type=newest`,
  });
};

export const getAlbumInfo = async (id) => {
    return client({
        method: 'GET',  
        url: `/getAlbum?u=guest&p=guest&v=1.12.0&f=json&c=test&id=${id}`
    })
}