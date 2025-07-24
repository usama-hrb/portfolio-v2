import "./Pagination.css"

export default function Pagination({ totalPages, postsPerPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex pages-num">
      {pages.map((page, index) => {
        return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>;
      })}
    </div>
  );
}
