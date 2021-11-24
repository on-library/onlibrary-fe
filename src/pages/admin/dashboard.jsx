import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";
import InfoCard from "../../components/pages/admin/dashboard/info-card";

const Dashboard = () => {
  return (
    <LayoutAdmin>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Admin</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading mt={2}>Dashboard</Heading>
      <SimpleGrid mt={4} columns={[1, 1, 2]} gap={6}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </SimpleGrid>
    </LayoutAdmin>
  );
};

export default Dashboard;
