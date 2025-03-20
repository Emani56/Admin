import React, { useMemo } from "react";
import { Card, Row, Col } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "./ThemeContext"; // Import useTheme from ThemeContext

const { Meta } = Card;

// Mock data for charts
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
];

const revenueData = [
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 1398 },
  { name: "Mar", revenue: 9800 },
  { name: "Apr", revenue: 3908 },
  { name: "May", revenue: 4800 },
  { name: "Jun", revenue: 3800 },
];

const productData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard = () => {
  const { isDarkMode } = useTheme(); // Use the theme context
  const memoizedSalesData = useMemo(() => salesData, []);
  const memoizedRevenueData = useMemo(() => revenueData, []);
  const memoizedProductData = useMemo(() => productData, []);

  return (
    <Row
      gutter={[16, 16]}
      style={{
        margin: 0,
        maxWidth: "100vw",
        backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, soft white for light mode
        color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
        padding: "16px", // Add padding for better spacing
      }}
    >
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card
          title="Monthly Sales"
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          }}
          headStyle={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            borderBottom: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={memoizedSalesData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#4A5568" : "#E2E8F0"} // Dark gray for dark mode, light gray for light mode
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#E2E8F0" : "#4A5568"} // Light gray for dark mode, dark gray for light mode
              />
              <YAxis stroke={isDarkMode ? "#E2E8F0" : "#4A5568"} /> {/* Light gray for dark mode, dark gray for light mode */}
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
                  color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                  border: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
                }}
              />
              <Legend />
              <Bar dataKey="sales" fill={isDarkMode ? "#3182CE" : "#63B3ED"} /> {/* Soft blue for dark mode, lighter blue for light mode */}
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card
          title="Revenue Trends"
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          }}
          headStyle={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            borderBottom: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={memoizedRevenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#4A5568" : "#E2E8F0"} // Dark gray for dark mode, light gray for light mode
              />
              <XAxis
                dataKey="name"
                stroke={isDarkMode ? "#E2E8F0" : "#4A5568"} // Light gray for dark mode, dark gray for light mode
              />
              <YAxis stroke={isDarkMode ? "#E2E8F0" : "#4A5568"} /> {/* Light gray for dark mode, dark gray for light mode */}
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
                  color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                  border: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke={isDarkMode ? "#63B3ED" : "#3182CE"} // Lighter blue for dark mode, soft blue for light mode
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card
          title="Product Distribution"
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          }}
          headStyle={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            borderBottom: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={memoizedProductData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={isDarkMode ? "#3182CE" : "#63B3ED"} // Soft blue for dark mode, lighter blue for light mode
                dataKey="value"
                label
              >
                {memoizedProductData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
                  color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                  border: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card
          title="Total Users"
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          }}
          headStyle={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            borderBottom: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
          }}
        >
          <Meta description="1,234" />
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card
          title="Total Orders"
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          }}
          headStyle={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            borderBottom: `1px solid ${isDarkMode ? "#4A5568" : "#E2E8F0"}`, // Dark gray for dark mode, light gray for light mode
          }}
        >
          <Meta description="567" />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(AdminDashboard);