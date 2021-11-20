import { Heading, SimpleGrid } from "@chakra-ui/layout";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";
import InfoCard from "../../components/pages/admin/dashboard/info-card";

const Dashboard = () => {
  return (
    <LayoutAdmin>
      <Heading>Dashboard</Heading>
      <SimpleGrid columns={3}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </SimpleGrid>
    </LayoutAdmin>
  );
};

export default Dashboard;
