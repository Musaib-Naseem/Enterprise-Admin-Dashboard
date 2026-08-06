// import { ROLES } from "../../constants/roles";
// import { useAppSelector } from "../../hooks";
// import { Permission } from "../../constants/Permission";
// import { hasPermission } from "../../utils/hasPermission";
// import Button from "../../components/ui/Button/Button";
// import Input from "../../components/ui/Input/Input";
// import Card from "../../components/ui/Card/Card";
// import Badge from "../../components/ui/Badge/Badge";
// import Spinnner from "../../components/ui/Spinner/Spinner";
// import Modal from "../../components/ui/Modal/Modal";

import KPISection from "./components/KPISections";
import SummaryWidget from "./components/SummaryWidgets";

const Dashboard = () => {
  // const data = useAppSelector((state) => state.auth.isAuthenticated);

  // const user = useAppSelector((state) => state.auth.user);

  // const canDelete = user && hasPermission(user.role, Permission.READ_PRODUCTS);

  // const showDeleteModal = false;

  return (
    <div className="space-y-6 p-4">
      <KPISection />

      <SummaryWidget />

      {/* <Button variant="danger"> Cancel </Button>
      <Input label="Email" placeholder="Enter Email" />
      <Card>Hello World</Card>
      <Badge text="musaib" />
      <Spinnner />
      <Modal open={showDeleteModal}>My Open Modal</Modal>

      {user?.role === ROLES.ADMIN && <h2> I am User </h2>}

      <h2>{data ? "true" : "false"}</h2>

      {canDelete && <h1> I am on checking version </h1>} */}
    </div>
  );
};

export default Dashboard;
