import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./slider.css";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh ",
        overflow: "scroll initial",
        transition: "all 0.5s",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Seller Panel
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CDBSidebarMenuItem icon="chart-line">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/add" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="myproducts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CDBSidebarMenuItem icon="user">My Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="orders"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CDBSidebarMenuItem icon="columns">Orders</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
