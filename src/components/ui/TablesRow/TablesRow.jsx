import Card from "../Card/Card";
import LatestOrders from "../LatestOrders/LatestOrders";
import LatestTransactions from "../LatestTransactions/LatestTransactions";
import "./TablesRow.css";
const txRows = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/80?u=11",
    name: "Herbert C. Patton",
    statusType: "success",
    statusText: "Confirm",
    amount: "$14,584",
    date: "5/12/2016",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/80?u=12",
    name: "Mathias N. Klausen",
    statusType: "warning",
    statusText: "Waiting payment",
    amount: "$8,541",
    date: "10/11/2016",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/80?u=13",
    name: "Nikolaj S. Henriksen",
    statusType: "success",
    statusText: "Confirm",
    amount: "$954",
    date: "8/11/2016",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/80?u=14",
    name: "Lasse C. Overgaard",
    statusType: "danger",
    statusText: "Payment expired",
    amount: "$44,584",
    date: "7/11/2016",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/80?u=15",
    name: "Kasper S. Jessen",
    statusType: "success",
    statusText: "Confirm",
    amount: "$8,844",
    date: "1/11/2016",
  },
];

const orderRows = [
  {
    id: 1,
    orderId: "#12354781",
    avatar: "https://i.pravatar.cc/80?u=21",
    customer: "Marie",
    product: "Riverston Glass Chair",
    badgeType: "success",
    badgeText: "Delivered",
    price: "$185",
    date: "5/12/20",
  },
  {
    id: 2,
    orderId: "#52140300",
    avatar: "https://i.pravatar.cc/80?u=22",
    customer: "Melissa",
    product: "Shine Company Catalina",
    badgeType: "success",
    badgeText: "Delivered",
    price: "$1,024",
    date: "5/12/20",
  },
  {
    id: 3,
    orderId: "#96254137",
    avatar: "https://i.pravatar.cc/80?u=23",
    customer: "Dwayne",
    product: "Trex Outdoor Furniture Cape",
    badgeType: "danger",
    badgeText: "Cancel",
    price: "$657",
    date: "5/12/20",
  },
  {
    id: 4,
    orderId: "#12365474",
    avatar: "https://i.pravatar.cc/80?u=24",
    customer: "Martin",
    product: "Oasis Bathroom Teak Corner",
    badgeType: "warning",
    badgeText: "Shipped",
    price: "$8451",
    date: "5/12/20",
  },
  {
    id: 5,
    orderId: "#85214796",
    avatar: "https://i.pravatar.cc/80?u=25",
    customer: "Vincent",
    product: "BeoPlay Speaker",
    badgeType: "success",
    badgeText: "Delivered",
    price: "$584",
    date: "5/12/20",
  },
];

export function TablesRow() {
  return (
    <section className="tables-row">
      <Card title="Latest Transactions">
        <LatestTransactions rows={txRows} />
      </Card>

      <Card title="Latest Orders">
        <LatestOrders rows={orderRows} />
      </Card>
    </section>
  );
}
