"use client";
import { useFetchAlbums } from "@/hooks/useFetchAlbum";
import { useState } from "react";
import Album from "./album";
const BASE_API_URL = "http://demo.subsonic.org/rest/";
const ITEM_WIDTH = 160;

const AlbumList = () => {
  const { isLoading, albums } = useFetchAlbums();
  const [selectedAlbum, setSelectedAlbum] = useState({});
  const [index, setIndex] = useState(0);

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % albums.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + albums.length) % albums.length);
  };

  const sliderStyle = {
    display: "flex",
    transform: `translateX(-${index * ITEM_WIDTH}px)`,
    transition: "transform 0.5s ease-in-out",
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container">
      <div className="slider-container">
        <button className="btn" onClick={handlePrev}>
          {"<=="}
        </button>
        <div className="wrapper">
          <div />
          <div className="slider">
            <div style={sliderStyle}>
              {albums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => handleSelectAlbum(album)}
                  style={{ minWidth: "150px", marginRight: "10px" }} // Adjust based on your actual image size and gap
                >
                  <img
                    src={`${BASE_API_URL}getCoverArt?id=${album.id}&size=150&u=guest&p=guest&v=1.12.0&c=test`}
                    alt="album cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="btn" onClick={handleNext}>
          {"==>"}
        </button>
      </div>
      {albums.length === 0 && <div>No albums found</div>}
      <Album id={selectedAlbum.id || albums[0]?.id} {...selectedAlbum} />
    </div>
  );
};

export default AlbumList;
