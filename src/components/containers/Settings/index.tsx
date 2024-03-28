import { PersonalInformationForm, Header } from "../../";

const Settings = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Settings" />
      <PersonalInformationForm />
    </div>
  );
};

export default Settings;
