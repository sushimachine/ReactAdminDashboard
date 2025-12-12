// ========================================================================
// ICON LEGEND
// All icons now use valid lucide-react component names (PascalCase)
// ========================================================================

// ------------------------------
// SIDEBAR LINKS
// ------------------------------

export const sidebarLinks = [
  {
    section: "DASHBOARD",
    links: [
      { name: "Ecommerce", path: "/dashboard", icon: "ShoppingBag" },
    ],
  },
  {
    section: "PAGES",
    links: [
      { name: "Orders", path: "/orders", icon: "ShoppingCart" },
      { name: "Employees", path: "/employees", icon: "Users" },
      { name: "Customers", path: "/customers", icon: "UserCheck" },
    ],
  },
  {
    section: "APPS",
    links: [
      { name: "Calendar", path: "/apps/calendar", icon: "CalendarDays" },
      { name: "Kanban", path: "/apps/kanban", icon: "Kanban" },
      { name: "Editor", path: "/apps/editor", icon: "FileEdit" },
      { name: "Color Picker", path: "/apps/color-picker", icon: "Palette" },
    ],
  },
  {
    section: "CHARTS",
    links: [
      { name: "Line", path: "/charts/line", icon: "TrendingUp" },
      { name: "Area", path: "/charts/area", icon: "AreaChart" },
      { name: "Bar", path: "/charts/bar", icon: "BarChart3" },
      { name: "Pie", path: "/charts/pie", icon: "PieChart" },
      { name: "Financial", path: "/charts/financial", icon: "CandlestickChart" },
      { name: "Color Mapping", path: "/charts/color-mapping", icon: "Layers" },
      { name: "Pyramid", path: "/charts/pyramid", icon: "Triangle" },
      { name: "Stacked", path: "/charts/stacked", icon: "AlignVerticalSpaceAround" },
    ],
  },
];

// ------------------------------
// EARNING CARDS
// ------------------------------

export const earningCards = [
  {
    title: "Earnings",
    amount: "$63,448.78",
    icon: "DollarSign",
    iconBg: "#E0F7FA",
    iconColor: "#00ACC1",
  },
  {
    title: "Customers",
    amount: "39,354",
    percentage: "-4%",
    icon: "Users",
    iconBg: "#E8F5E9",
    iconColor: "#43A047",
  },
  {
    title: "Products",
    amount: "4,396",
    percentage: "+23%",
    icon: "Box",
    iconBg: "#FFF8E1",
    iconColor: "#FDD835",
  },
  {
    title: "Sales",
    amount: "423,39",
    percentage: "+38%",
    icon: "BarChart3",
    iconBg: "#FFF3E0",
    iconColor: "#FB8C00",
  },
];

// ------------------------------
// REVENUE DATA
// ------------------------------

export const revenueData = {
  budget: "$93,438",
  expense: "$48,487",
  budgetChange: "+23%",
  expenseChange: "-12%",
};

export const revenueChartData = [
  { month: "Jan", budget: 200, expense: 120 },
  { month: "Feb", budget: 300, expense: 160 },
  { month: "Mar", budget: 350, expense: 180 },
  { month: "Apr", budget: 400, expense: 250 },
  { month: "May", budget: 450, expense: 300 },
  { month: "Jun", budget: 500, expense: 320 },
  { month: "Jul", budget: 600, expense: 400 },
];

// ------------------------------
// RECENT TRANSACTIONS
// ------------------------------

export const recentTransactions = [
  {
    title: "Paypal Transfer",
    amount: "+$350",
    status: "Added",
    icon: "Wallet",
    iconColor: "#00ACC1",
    iconBg: "#E0F7FA",
  },
  {
    title: "Wallet Payment",
    amount: "-$560",
    status: "Bill",
    icon: "Shield",
    iconColor: "#4CAF50",
    iconBg: "#E8F5E9",
  },
  {
    title: "Credit Card Refund",
    amount: "+$350",
    status: "Reversed",
    icon: "CreditCard",
    iconColor: "#FDD835",
    iconBg: "#FFF8E1",
  },
  {
    title: "Bank Transfer",
    amount: "+$350",
    status: "Added",
    icon: "ArrowUpRight",
    iconColor: "#E57373",
    iconBg: "#FFEBEE",
  },
];

// ------------------------------
// WEEKLY STATS
// ------------------------------

export const weeklyStats = [
  {
    title: "Top Sales",
    amount: "-$560",
    desc: "Johnathan Doe",
    icon: "ShoppingCart",
    iconBg: "#FB9678",
  },
  {
    title: "Best Seller",
    amount: "+$230",
    desc: "MaterialPro Admin",
    icon: "Star",
    iconBg: "#FDD835",
  },
  {
    title: "Most Commented",
    amount: "+$156",
    desc: "Ample Admin",
    icon: "MessageCircle",
    iconBg: "#00C292",
  },
];

// ------------------------------
// PRODUCT PERFORMANCE
// ------------------------------

export const productPerformance = [
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    title: "Butterscotch Ice Cream",
    desc: "Ice-Cream, Milk, Powder",
    rating: "Good",
    date: "2021-06-17",
  },
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    title: "Red Candy Deluxe",
    desc: "Candy, Sugar, Flavor",
    rating: "Awesome",
    date: "2021-07-15",
  },
];

// ------------------------------
// ORDERS DATA
// ------------------------------

export const ordersData = [
  {
    orderId: 10248,
    customer: "Vinet",
    total: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "Pending",
    statusColor: "#FB9678",
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    orderId: 345653,
    customer: "Carson Darrin",
    total: 56.34,
    item: "Butter Scotch",
    location: "Delhi",
    status: "Complete",
    statusColor: "#8BE78B",
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
];

// ------------------------------
// EMPLOYEES DATA
// ------------------------------

export const employeesData = [
  {
    id: 1,
    name: "Michael Roberts",
    title: "Software Engineer",
    country: "USA",
    hireDate: "2021-02-13",
    reportsTo: "Sarah Thomas",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Sarah Thomas",
    title: "Team Lead",
    country: "UK",
    hireDate: "2020-03-12",
    reportsTo: "No one",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

// ------------------------------
// CUSTOMERS DATA
// ------------------------------

export const customersData = [
  {
    id: 1,
    name: "Alex Johnson",
    project: "Ecommerce Redesign",
    status: "Active",
    weeks: 5,
    budget: "$32,000",
    location: "USA",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 2,
    name: "Riya Sharma",
    project: "CRM Dashboard",
    status: "Pending",
    weeks: 3,
    budget: "$18,000",
    location: "India",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

// ------------------------------
// CALENDAR EVENTS
// ------------------------------

export const calendarEvents = [
  {
    id: 1,
    title: "Team Meeting",
    start: "2025-01-15T10:00:00",
    end: "2025-01-15T11:00:00",
  },
  {
    id: 2,
    title: "Design Review",
    start: "2025-01-17T14:00:00",
    end: "2025-01-17T15:00:00",
  },
];

// ------------------------------
// KANBAN BOARD
// ------------------------------

export const kanbanData = {
  todo: [
    { id: "t1", title: "Design login page" },
    { id: "t2", title: "Update dashboard widgets" },
  ],
  inProgress: [{ id: "p1", title: "Build Kanban board UI" }],
  testing: [{ id: "test1", title: "Test user onboarding flow" }],
  done: [{ id: "d1", title: "Fix table pagination bug" }],
};

// ------------------------------
// NOTIFICATIONS
// ------------------------------

export const notifications = [
  { id: 1, message: "New order received", time: "2m ago", unread: true },
  { id: 2, message: "Server backup completed", time: "1h ago", unread: false },
  { id: 3, message: "New customer registered", time: "5h ago", unread: false },
];

// ------------------------------
// THEME COLORS
// ------------------------------

export const themeColors = [
  "#1E88E5",
  "#8E24AA",
  "#D81B60",
  "#43A047",
  "#FB8C00",
  "#00ACC1",
];

// ------------------------------
// USER PROFILE
// ------------------------------

export const userProfileData = {
  name: "Michael Roberts",
  email: "michael@shoppy.com",
  role: "Administrator",
  avatar: "https://i.pravatar.cc/150?img=3",
};

// ------------------------------
// CHAT DATA
// ------------------------------

export const chatData = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
    icon: "MessageCircle",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
    icon: "Mail",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
    icon: "DollarSign",
  },
];

// ------------------------------
// CART DATA
// ------------------------------

export const cartData = [
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Butterscotch Ice Cream",
    category: "Milk Product",
    price: "$250",
    icon: "ShoppingCart",
  },
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Supreme Fresh Tomato",
    category: "Vegetable Item",
    price: "$450",
    icon: "ShoppingBag",
  },
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Red Color Candy",
    category: "Food Item",
    price: "$190",
    icon: "Candy",
  },
];

// ------------------------------
// SPARKLINE DATA
// ------------------------------

export const sparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

