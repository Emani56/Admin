import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeContext"; // Import useTheme
import { Layout, Menu, Button, Dropdown, Avatar, Badge } from "antd";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SettingOutlined,
  BellOutlined,
  DashboardOutlined,
  LineChartOutlined,
  UserOutlined,
  TeamOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Customers from "./customers/Customers";
import Dashboard from "./Dashboard";
import Tab from "./Tab";

const { Header, Sider, Content } = Layout;

// Mock user data
const user = {
  name: "John Doe",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

// Mock notifications
const notifications = [
  { id: 1, title: "New message", description: "You have a new message" },
  {
    id: 2,
    title: "System update",
    description: "System will be updated at 10 PM",
  },
];

// User dropdown menu
const userMenu: MenuProps["items"] = [
  { key: "1", label: "Profile", icon: <UserOutlined /> },
  { key: "2", label: "Settings", icon: <SettingOutlined /> },
  { key: "3", label: "Logout", icon: <LogoutOutlined /> },
];

// Notifications dropdown menu
const notificationMenu: MenuProps["items"] = notifications.map((item) => ({
  key: item.id,
  label: (
    <div>
      <p style={{ margin: 0, fontWeight: "bold" }}>{item.title}</p>
      <p style={{ margin: 0 }}>{item.description}</p>
    </div>
  ),
}));

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [option, setOption] = useState("");
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme context

  const sidebarWidth = isMobile ? 0 : collapsed ? 80 : 200;

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const handleClick = (label: string) => {
    if (isMobile) {
      toggleCollapsed();
    }
    setOption(label);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, soft white for light mode
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={isMobile ? 0 : 80}
        style={{
          backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
          overflow: "hidden",
          transition: "margin-left 0.2s ease-in",
          height: "100vh",
          position: "fixed",
          padding: "16px 0",
          margin: 0,
          width: "200px",
          left: 0,
          top: isMobile ? 64 : 0,
          bottom: 0,
          zIndex: 1,
          display: isMobile && collapsed ? "none" : "block",
        }}
      >
        <Menu
          theme={isDarkMode ? "dark" : "light"} // Set menu theme
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            transition: "width 0.2s ease-in-out",
          }}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
              onClick: () => handleClick("home"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "2",
              icon: <DashboardOutlined />,
              label: "Dashboard",
              onClick: () => handleClick("dashboard"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "3",
              icon: <LineChartOutlined />,
              label: "Analytics",
              onClick: () => handleClick("analytics"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "4",
              icon: <TeamOutlined />,
              label: "Users",
              onClick: () => handleClick("users"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "5",
              icon: <ShoppingOutlined />,
              label: "Products",
              onClick: () => handleClick("products"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "6",
              icon: <ShoppingCartOutlined />,
              label: "Orders",
              onClick: () => handleClick("orders"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "7",
              icon: <MessageOutlined />,
              label: "Messages",
              onClick: () => handleClick("messages"),
              style: {
                margin: "4px 0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
            {
              key: "8",
              icon: <LogoutOutlined />,
              label: <Link to="/login">Logout</Link>,
              style: {
                position: "absolute",
                bottom: "50px",
                width: "100%",
                margin: "0px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              },
            },
          ]}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: isMobile ? 0 : sidebarWidth,
          transition: "margin-left 0.2s ease-out",
          position: "relative",
          width: isMobile ? "100%" : `calc(100% - ${sidebarWidth}px)`,
        }}
      >
        <Header
          style={{
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, white for light mode
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "64px",
            lineHeight: "64px",
            borderBottom: isDarkMode ? "1px solid #4A5568" : "1px solid #E2E8F0", // Dark gray for dark mode, light gray for light mode
          }}
        >
          {/* Left Side: Toggle Button and Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Button
              type="text"
              onClick={toggleCollapsed}
              aria-label="Toggle Menu"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{
                color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                fontSize: "20px",
              }}
            />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
              }}
            >
              Admin
            </div>
          </div>

          {/* Right Side: Theme Toggle, Notifications, and User Dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Theme Toggle Button */}
            <Button
              type="text"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              icon={
                isDarkMode ? (
                  <i className="bi bi-sun" style={{ fontSize: "16px" }} />
                ) : (
                  <i className="bi bi-moon" style={{ fontSize: "16px" }} />
                )
              }
              style={{
                color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
              }}
            />

            {/* Notification Dropdown */}
            <Dropdown menu={{ items: notificationMenu }} trigger={["click"]}>
              <Badge count={notifications.length} dot>
                <Button
                  type="text"
                  icon={<BellOutlined />}
                  style={{
                    color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                    fontSize: "16px",
                  }}
                />
              </Badge>
            </Dropdown>

            {/* User Dropdown */}
            <Dropdown menu={{ items: userMenu }} trigger={["click"]}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Avatar src={user.avatar} />
                <span
                  style={{
                    fontWeight: "bold",
                    color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
                  }}
                >
                  {user.name}
                </span>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",
            backgroundColor: isDarkMode ? "#2D3748" : "#FFFFFF", // Dark gray for dark mode, soft white for light mode
            color: isDarkMode ? "#E2E8F0" : "#4A5568", // Light gray for dark mode, dark gray for light mode
          }}
        >
          <div style={{ maxWidth: "100%" }}>
            {option === "dashboard" && <Dashboard />}
            {option === "home" && <Tab />}
            {option === "analytics" && <div>analytics</div>}
            {option === "users" && <Customers />}
            {option === "products" && <div className="w-full">Products</div>}
            {option === "orders" && <div className="w-full">Orders</div>}
            {option === "messages" && <div className="w-full">Messages</div>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(App);