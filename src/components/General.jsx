import { useState } from "react";
import Button from "./Button";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
export default function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fullName = firstName + " " + lastName;
  return (
    <>
      <section className="my-6 shadow-md rounded-sm p-10">
        <h1 className="text-4xl font-bold my-10">General Information</h1>

        {isSubmitted ? <div className="flex flex-col gap-3">
          <h1 className="text-lg"><Person2OutlinedIcon/> {fullName} </h1>
          <p><EmailOutlinedIcon/> {email} </p>
          <p> <PhoneOutlinedIcon/> {phone} </p>
          <p> <DescriptionOutlinedIcon/> {description} </p>
          <div className="flex justify-end">
            <Button
              handleClick={() => {
                setIsSubmitted(false);
              }}
              type={"button"}
              primary={false}
              secondary={true}
            >
              Edit
            </Button>
          </div>
        </div> : 

       
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}
        >
          <div className="flex flex-col lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Noah"
                name="firstName"
                value={firstName}
              />
            </div>
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                name="lastName"
                placeholder="Boat"
                value={lastName}
              />
            </div>
          </div>

          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder="noah@gmail.com"
                value={email}
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="543 234 32 32"
                name="phone"
                value={phone}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:gap-6">
            <div className="my-3 flex flex-col w-full">
              <label htmlFor="description">Bio</label>
              <textarea
                id="description"
                className="border rounded-sm border-gray-400 p-1"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                name="description"
                value={description}
                rows="5"
                cols=""
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-6 p-3">
            <Button>Submit</Button>
          </div>
        </form>}
      </section>
    </>
  );
}
