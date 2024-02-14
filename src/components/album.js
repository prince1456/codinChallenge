"use client";
import Table from "@/components/table";
import { useFetchAlbumInfo } from "@/hooks/useFetchAlbum";

const Album = ({ id, name }) => {
  const { album, isLoading } = useFetchAlbumInfo(id);
  isLoading && <div>Loading...</div>;
  return (
    <div>
      <h1>{name ?? album?.name}</h1>
      {album?.name && (
        <Table>
          <Table.Header />
          <Table.Body album={album} />
        </Table>
      )}
    </div>
  );
};

export default Album;
