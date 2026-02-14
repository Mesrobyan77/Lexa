import { Box, Layers3, Tag, BriefcaseBusiness } from "lucide-react";

export const statData = [
  {
    id: 1,
    title: "Orders",
    value: "1,587",
    badgeText: "+11%",
    badgeType: "info",
    icon: Box, // 👈 COMPONENT — NOT <Box />
  },
  {
    id: 2,
    title: "Revenue",
    value: "$46,782",
    badgeText: "-29%",
    badgeType: "danger",
    icon: Layers3,
  },
  {
    id: 3,
    title: "Average Price",
    value: "$15.9",
    badgeText: "0%",
    badgeType: "warning",
    icon: Tag,
  },
  {
    id: 4,
    title: "Product Sold",
    value: "1890",
    badgeText: "+89%",
    badgeType: "info",
    icon: BriefcaseBusiness,
  },
];

export const metricCards = [
  {
    id: 1,
    title: "Monthly Earnings",
    items: [
      { value: "$56241", label: "Marketplace" },
      { value: "$23651", label: "Total Income" },
    ],
    chart: {
      type: "donut",
      title: "In-Store Sales",
      centerValue: "30",
      data: [
        { name: "Download Sales", value: 12, color: "#f0f1f4" },
        { name: "In-Store Sales", value: 30, color: "#7a6fbe" },
        { name: "Mail-Order Sales", value: 20, color: "#2cb3d9" },
      ],
    },
  },

  {
    id: 2,
    title: "Email Sent",
    items: [
      { value: "$ 89425", label: "Marketplace" },
      { value: "$ 56210", label: "Total Income" },
      { value: "$ 8974", label: "Last Month" },
    ],
    chart: {
      type: "area",
      data: [
        { year: "2011", a: 10, b: 0, c: 0 },
        { year: "2012", a: 160, b: 40, c: 10 },
        { year: "2013", a: 60, b: 190, c: 120 },
        { year: "2014", a: 180, b: 20, c: 60 },
        { year: "2015", a: 90, b: 360, c: 80 },
        { year: "2016", a: 0, b: 120, c: 240 },
        { year: "2017", a: 0, b: 0, c: 0 },
      ],
    },
  },

  {
    id: 3,
    title: "Monthly Earnings",
    items: [
      { value: "$ 2548", label: "Marketplace" },
      { value: "$ 6985", label: "Total Income" },
    ],
    chart: {
      type: "bar",
      data: [
        { name: "2006", a: 60, b: 160 },
        { name: "2007", a: 90, b: 140 },
        { name: "2008", a: 80, b: 190 },
        { name: "2009", a: 70, b: 150 },
        { name: "2010", a: 60, b: 130 },
        { name: "2011", a: 50, b: 80 },
        { name: "2012", a: 65, b: 140 },
        { name: "2013", a: 70, b: 120 },
        { name: "2014", a: 55, b: 140 },
        { name: "2015", a: 95, b: 190 },
        { name: "2016", a: 80, b: 140 },
      ],
    },
  },
];

export const latestTransactions = [
  {
    id: 1,
    user: {
      name: "Herbert C. Patton",
      img: "https://i.pravatar.cc/150?u=6",
    },
    status: { text: "Confirm", type: "success" },
    amount: "$14,584",
    date: "5/12/2016",
  },
  {
    id: 2,
    user: {
      name: "Mathias N. Klausen",
      img: "https://i.pravatar.cc/150?u=2",
    },
    status: { text: "Waiting payment", type: "warning" },
    amount: "$8,541",
    date: "10/11/2016",
  },
  {
    id: 1,
    user: {
      name: "Herbert C. Patton",
      img: "https://i.pravatar.cc/150?u=3",
    },
    status: { text: "Confirm", type: "success" },
    amount: "$14,584",
    date: "5/12/2016",
  },
  {
    id: 2,
    user: {
      name: "Mathias N. Klausen",
      img: "https://i.pravatar.cc/150?u=4",
    },
    status: { text: "Waiting payment", type: "warning" },
    amount: "$8,541",
    date: "10/11/2016",
  },
  {
    id: 1,
    user: {
      name: "Herbert C. Patton",
      img: "https://i.pravatar.cc/150?u=5",
    },
    status: { text: "Confirm", type: "success" },
    amount: "$14,584",
    date: "5/12/2016",
  },
  {
    id: 2,
    user: {
      name: "Mathias N. Klausen",
      img: "https://i.pravatar.cc/150?u=8",
    },
    status: { text: "Waiting payment", type: "warning" },
    amount: "$8,541",
    date: "10/11/2016",
  },
];

export const latestOrders = [
  {
    id: 1,
    orderNo: "#12354781",
    product: {
      name: "Riverston Glass Chair",
      img: "/assets/images/users/user-1.jpg",
    },
    status: { text: "Delivered", type: "success" },
    price: "$185",
    date: "5/12/2016",
  },
  {
    id: 2,
    orderNo: "#96254137",
    product: {
      name: "Trex Outdoor Furniture Cape",
      img: "/assets/images/users/user-3.jpg",
    },
    status: { text: "Cancel", type: "danger" },
    price: "$657",
    date: "5/12/2016",
  },
];

export const inboxData = [
  {
    id: 1,
    img: "https://i.pravatar.cc/150?u=1",
    name: "Misty",
    text: "Hey! there I'm available...",
    time: "13:40 PM",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?u=2",
    name: "Melissa",
    text: "I've finished it! See you so...",
    time: "13:34 PM",
  },
  {
    id: 1,
    img: "https://i.pravatar.cc/150?u=3",
    name: "Misty",
    text: "Hey! there I'm available...",
    time: "13:40 PM",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?u=4",
    name: "Melissa",
    text: "I've finished it! See you so...",
    time: "13:34 PM",
  },
  {
    id: 1,
    img: "https://i.pravatar.cc/150?u=5",
    name: "Misty",
    text: "Hey! there I'm available...",
    time: "13:40 PM",
  },
  {
    id: 2,
    img: "https://i.pravatar.cc/150?u=6",
    name: "Melissa",
    text: "I've finished it! See you so...",
    time: "13:34 PM",
  },
];
