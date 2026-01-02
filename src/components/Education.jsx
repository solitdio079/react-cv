import { Fragment, useState } from "react";
import Button from "./Button";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
export default function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [dateStudy, setDateStudy] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [educationArray, setEducationArray] = useState([]);
  return (
    <>
      <section className="my-6 shadow-md rounded-sm p-10 max-w-screen overflow-x-auto">
        <h1 className="text-2xl lg:text-4xl font-bold my-10">Educational Experience</h1>

        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3">
            {educationArray.map(education => <Fragment key={education.id}>
                <div className="flex items-center gap-3 m-2"><SchoolOutlinedIcon/> {education.schoolName} </div>
                <div className="flex items-center gap-3 m-2"><SubjectOutlinedIcon/> {education.studyTitle} </div>
                <div className="flex items-center gap-3 m-2"><CalendarMonthOutlinedIcon/> {education.dateStudy} </div>
                <div className="border border-gray-300 p-5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setDateStudy(education.dateStudy);
                      setSchoolName(education.schoolName);
                      setStudyTitle(education.studyTitle);
                      setEditMode(education.id);
                    }}
                    className="bg-green-500 text-white p-1"
                  >
                    Edit
                  </button>
                  <button onClick={()=> {
                    setEducationArray(educationArray.filter(item => item.id !==education.id))
                  }} className="bg-red-500 text-white p-2">Delete</button>
                </div>
            </Fragment>)}
        </div>

       
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (editMode) {
              setEducationArray(
                educationArray.map((education) => {
                  if (education.id === editMode) {
                    return { id: editMode, schoolName, studyTitle, dateStudy };
                  }
                  return education;
                })
              );
              setEditMode(null)
            } else {
              setEducationArray([
                ...educationArray,
                { id: crypto.randomUUID(), schoolName, studyTitle, dateStudy },
              ]);
            }

            setSchoolName("");
            setDateStudy("");
            setStudyTitle("");
          }}
        >
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setSchoolName(e.target.value);
                }}
                placeholder="Noah"
                name="firstName"
                value={schoolName}
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="studyTitle">Title of Study</label>
              <input
                type="text"
                id="studyTitle"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setStudyTitle(e.target.value);
                }}
                name="studyTitle"
                placeholder="High School"
                value={studyTitle}
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="dateStudy">Date of Study(end date)</label>
              <input
                type="date"
                id="dateStudy"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setDateStudy(e.target.value);
                }}
                placeholder="543 234 32 32"
                name="dateStudy"
                value={dateStudy}
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
