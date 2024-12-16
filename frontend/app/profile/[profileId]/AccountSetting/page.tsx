import Image from "next/image";
import profileImage from "../../../public/profileImage.png";

const formFields = [
  { id: 1, label: "Full name", placeholder: "Enter your name...", descr: "Your name may appear around FlowerWork where you contribute or are mentioned. You can change it at any time." },
  { id: 2, label: "Job title", placeholder: "Enter your job title...", descr: "Your Job title may appear around FlowerWork where you contribute or are mentioned. You can change it at any time." },
  { id: 3, label: "Email", placeholder: "Enter your email", descr: "All our notifications will be sent to this email." },
  { id: 4, label: "Department or team", placeholder: "Enter your Department or team", descr: "Your Department or team may appear around FlowerWork where you contribute." },
  { id: 5, label: "Phone number", placeholder: "Enter your phone number", descr: "We will contact you regarding any updated with the projects you are a part of. Your phone number will be visible for your team members." },
];
interface FormFieldProps {
  label: string,
  placeholder: string,
  descr: string

}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, descr }) => (
  <label className="p4">
    <p className="font-light text-left font-montserrat text-lg">{label}</p>
    <input
      style={{ borderWidth: '1.5px' }}
      className="border-black rounded-lg px-3 py-1.5 italic w-full text-lg"
      type="text"
      placeholder={placeholder}
    />
    <p style={{ color: '#A7A19B' }} className="font-light text-sm p-1">
      {descr}
    </p>
  </label>
);

const AccountSettings: React.FC = () => (
  <div className="flex flex-col items-center p-10">
    <div className="flex items-start space-x-5 mb-5 w-full absolute top-16 p-5">
      <div>
        <Image
          className="rounded-full"
          src={profileImage}
          alt="profile photo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col items-start h-full w-1/2 absolute" style={{ top: '120px', left: '150px' }}>
        <button
          style={{ backgroundColor: '#BD71D4' }}
          className="text-white px-3 py-1 rounded-md font-light text-xs"
        >
          Upload Photo
        </button>
        <button
          className="text-black px-3 py-2 underline italic font-medium text-xs"
          style={{
            textDecorationThickness: '0.5px',
            textUnderlineOffset: '1px'
          }}
        >
          Remove Photo
        </button>
      </div>

    </div>

    <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full">
      {formFields.map((field) => (
        <FormField
          key={field.id}
          label={field.label}
          placeholder={field.placeholder}
          descr={field.descr}
        />
      ))}
    </div>

    <div className="flex justify-end gap-4 mt-4 w-full">
      <button className="px-4 py-2 text-black rounded-lg border border-black">
        Cancel
      </button>
      <button
        style={{ backgroundColor: '#BD71D4' }}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Update Profile
      </button>
    </div>
  </div>
);

export default AccountSettings;