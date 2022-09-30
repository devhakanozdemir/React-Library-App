import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ListCategories = () => {
  const { categoriesState } = useSelector((state) => state);
  console.log("catState", categoriesState);

  useEffect(() => {
    document.title = "Kitaplik - Kategoriler";
  }, []);

  if (categoriesState.success !== true) {
    return <Loading />;
  }

  return (
    <div className="container my-5">
      <div className="my-3 d-flex justify-content-end">
        <Link to="/add-category" className="btn btn-primary">
          Kategori Ekle
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kategori Adi</th>
            <th className="text-center" scope="col">
              Islem
            </th>
          </tr>
        </thead>
        <tbody>
          {categoriesState.categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category.name}</td>

                <td className="text-center">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => {
                        // setShowModal(true);
                        // //deleteBook(book.id)
                        // setSilinecekKitap(book.id);
                        // setSilinecekKitapIsmi(book.name);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`edit-category/${category.id}`}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {showModal === true && (
        <Modal
          title={silinecekKitapIsmi}
          aciklama={"Silmek istediginize emin misiniz ?"}
          onConfirm={() => deleteBook(silinecekKitap)}
          onCancel={() => setShowModal(false)}
        />
      )} */}
    </div>
  );
};

export default ListCategories;
