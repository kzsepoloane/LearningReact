import { Card } from "@/app/components/card";
import Link from "next/link";

const Notifications = () => (
  <Card>
    <h1>Notifications</h1>
    <br />
    <ul>
      <li>
        <Link href="/complex-dashboard/archived">Archived Notifications</Link>
      </li>
    </ul>
  </Card>
);
export default Notifications;
