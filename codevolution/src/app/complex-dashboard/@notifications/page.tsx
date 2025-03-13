import { Card } from "@/app/components/card";
import Link from "next/link";

const Notifications = () => (
  <Card>
    <h1>Notifications</h1>
    <Link href="/complex-dashboard/archived">Archived</Link>
  </Card>
);

export default Notifications;
