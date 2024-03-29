import { Header } from "../../";
import { useAuth } from "../../../hooks";

const Metrics = () => {
  const { authState } = useAuth();
  console.log(authState);
  return (
    <div className="flex flex-col gap-5">
      <Header title="Metrics" />
    </div>
  );
};

export default Metrics;
