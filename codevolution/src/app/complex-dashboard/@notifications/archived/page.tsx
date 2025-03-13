import { Card } from "@/app/components/card";
import Link from "next/link";

const Notifications = () => (
  <Card>
    <h1>Archived Notifications</h1>
    <Link href="/complex-dashboard">Back to Dashboard</Link>
  </Card>
);

export default Notifications;
