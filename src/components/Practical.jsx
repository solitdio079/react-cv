import { Fragment, useState } from "react";
import Button from "./Button";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
export default function Practical() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [practicalArray, setPracticalArray] = useState([]);
  return (
    <>
      <section className="my-6 shadow-md rounded-sm p-10 max-w-screen overflow-x-auto">
        <h1 className="text-2xl lg:text-4xl font-bold my-10">
          Practical Experience
        </h1>

        <div className="flex flex-col lg:flex-row  lg:flex-wrap gap-3">
          {practicalArray.map((practical) => (
            <div key={practical.id} className="w-full">
              <div className="flex items-center gap-3 m-2">
                <SchoolOutlinedIcon /> {practical.companyName}{" "}
              </div>
              <div className="flex items-center gap-3 m-2">
                <SubjectOutlinedIcon /> {practical.positionTitle}{" "}
              </div>
              <div className="flex flex-col gap-3">
                {practical.responsibilities.split(",").map((item, index) => (
                  <div key={index} className="flex pl-10 items-center gap-1">
                    <CheckBoxOutlinedIcon /> {item}{" "}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 m-2">
                <CalendarMonthOutlinedIcon /> {practical.startDate}{" "}
              </div>
              <div className="flex items-center gap-3 m-2">
                <CalendarMonthOutlinedIcon /> {practical.endDate}{" "}
              </div>
              <div className="border border-gray-300 p-5 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setCompanyName(practical.companyName);
                    setPositionTitle(practical.positionTitle);
                    setResponsibilities(practical.responsibilities);
                    setStartDate(practical.startDate);
                    setEndDate(practical.endDate);
                    setEditMode(practical.id);
                  }}
                  className="bg-green-500 text-white p-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setPracticalArray(
                      practicalArray.filter((item) => item.id !== practical.id)
                    );
                  }}
                  className="bg-red-500 text-white p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (editMode) {
              setPracticalArray(
                practicalArray.map((practical) => {
                  if (practical.id === editMode) {
                    return {
                      id: editMode,
                      companyName,
                      positionTitle,
                      responsibilities,
                      startDate,
                      endDate,
                    };
                  }
                  return practical;
                })
              );
              setEditMode(null);
            } else {
              setPracticalArray([
                ...practicalArray,
                {
                  id: crypto.randomUUID(),
                  companyName,
                  positionTitle,
                  responsibilities,
                  startDate,
                  endDate,
                },
              ]);
            }

            setCompanyName("");
            setPositionTitle("");
            setResponsibilities("");
            setStartDate("");
            setEndDate("");
          }}
        >
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                placeholder="Exxon Mobil"
                name="companyName"
                value={companyName}
                required
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="positionTitle">Position Title</label>
              <input
                type="text"
                id="positionTitle"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setPositionTitle(e.target.value);
                }}
                placeholder="CEO"
                name="positionTitle"
                value={positionTitle}
                required
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="responsibilities">
                Responsibilities(use "," as separator)
              </label>
              <textarea
                id="responsibilities"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setResponsibilities(e.target.value);
                }}
                name="responsibilities"
                value={responsibilities}
                rows="5"
                cols=""
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                name="startDate"
                value={startDate}
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                name="endDate"
                value={endDate}
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-6 p-3">
            <Button
              primary={Boolean(editMode) === false}
              secondary={Boolean(editMode)}
            >
              {editMode ? "Edit" : "Submit"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
