import { useState, useEffect } from "react";
import { getRecentAlbums, getAlbumInfo} from "@/service/albums-services";

const useFetchAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecentAlbums().then(({ data }) => {
      setAlbums(data["subsonic-response"].albumList2.album);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, albums };
};

const useFetchAlbumInfo = (id) => {
  const [album, setAlbum] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAlbumInfo(id).then(({ data }) => {
      setAlbum(data["subsonic-response"].album);
      setIsLoading(false);
    });
  }, [id]);
  return { isLoading, album };
}

export { useFetchAlbums, useFetchAlbumInfo };
