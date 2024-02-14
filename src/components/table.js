const COLUMNS = [
    {
        key: 'title',
        value: 'Title'
    },
    {
        key: 'year',
        value: 'Year'
    }

]
const Table = ({children}) => {
  return (
    <table>
        {children}
    </table>
  );
};

const Header = () => {
    return (
        <tr>
            {COLUMNS.map((header) => (
                <th key={header.key}>{header.value}</th>
            ))}
      </tr>
    )
}
const Body = ({album}) => {
    return (
        <>
            {album?.song?.map((song) => (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.year}</td>
                </tr>
            ))}
        </>
    )
}
Table.Header = Header;
Table.Body = Body;

export default Table;