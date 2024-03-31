import { Header, PersonalInformationForm } from "../../";

const Metrics = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-[5rem]">
        <Header title="Metrics" />
      </div>
      <PersonalInformationForm />
      <PersonalInformationForm />
    </div>
  );
};

export default Metrics;
