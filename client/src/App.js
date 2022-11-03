import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import FileUploader from "./component/fileUpload/FileUpload";
import FileUpload from "./component/FileUpload";

function App() {
  const [files, setFiles] = useState([]);

  const fetchFile = async () => {
    const dbfiles = await axios.get("//localhost:5000/upload/getFiles");

    if (dbfiles && dbfiles.data) {
      setFiles(dbfiles.data);
    }
    console.log(dbfiles.data);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  const handleDelete = async (id) => {
    const deleteFIle = await axios.delete("//ocalhost:5000/upload/deleteFile", {
      id: id,
    });
    console.log(deleteFIle);
    fetchFile();
  };

  return (
    <div className="App">
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react" /> React File Upload
        </h4>

        <FileUpload refresh={fetchFile} />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">File size</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {files.length > 0
              ? files?.map((file, index) => {
                  return (
                    <tr>
                      <th scope="row">{file.id}</th>
                      <td className="text-left">{file.file_name}</td>
                      <td>{file.size} KB</td>
                      <td>{file.date}</td>
                      <td>
                        <button
                          type="button"
                          onClick={async () => {
                            const deleteFIle = await axios.delete(
                              "//ocalhost:5000/upload/deleteFile",
                              {
                                id: file.id,
                              }
                            );
                            console.log(deleteFIle);
                            fetchFile();
                          }}
                          class="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "no files"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
