import axios from "axios";

const Structchre = ({ titel, value }) => {
  return (
    <div className="flex justify-between w-full mb-2">
      <p className="font-semibold capitalize">{titel}</p>
      <p className="capitalize">{value}</p>
    </div>
  );
};

export default function Modal({
  closeModal,
  modalData,
  postRout,
  DBcollection,
}) {
  return (
    <main className="absolute top-0 bottom-0 left-0 right-0 bg-gray-300/50 flex justify-center items-center" onClick={closeModal}>
      <div className="fixed bg-white shadow-md shadow-slate-900 rounded-md border-2 p-7  min-w-[500px] ">
        <h2 className="font-semibold text-2xl capitalize text-center mb-2">
          {DBcollection} Information
        </h2>
        {/* student element*/}
        {DBcollection == "student" && (
          <div>
            <Structchre titel={"name"} value={modalData.name} />
            <Structchre titel={"roll"} value={modalData.roll} />
            <Structchre titel={"father name"} value={modalData.fName} />
            <Structchre titel={"mother name"} value={modalData.mName} />
            <Structchre titel={"address"} value={modalData.address} />
            <Structchre titel={"date of birth"} value={modalData.dateOfBirth} />
            <Structchre titel={"number"} value={modalData.number} />
            <Structchre titel={"second number"} value={modalData.secendNuber} />
            <Structchre titel={"guardian number"} value={modalData.guardian} />
            <Structchre titel={"technology"} value={modalData.technology} />
            <Structchre titel={"section"} value={modalData.section} />
          </div>
        )}
        {/* teacher element */}
        {DBcollection == "teacher" && (
          <div>
            <Structchre titel={"name"} value={modalData.name} />
            <Structchre titel={"technology"} value={modalData.technology} />
            <Structchre titel={"designation"} value={modalData.designation} />
            <Structchre titel={"address"} value={modalData.address} />
            <Structchre titel={"number"} value={modalData.number} />
            <Structchre titel={"second number"} value={modalData.secendNuber} />
          </div>
        )}

        <div className="flex justify-end gap-x-5 ">
          {/* close button */}
          <button
            onClick={closeModal}
            className="bg-gray-500 text-xl rounded-md text-white py-2 px-3 mt-4"
          >
            Close
          </button>
          {/* delete button */}
          <button
            className="bg-red-600 rounded-md text-white py-2 px-3 mt-4"
            onClick={() =>
              axios
                .post(`http://localhost:8000/delete`, {
                  id: modalData._id,
                  collection: DBcollection,
                })
                .then((res) => console.log(res.data))
                .then(closeModal)
                .catch((error) => console.log(error))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}
