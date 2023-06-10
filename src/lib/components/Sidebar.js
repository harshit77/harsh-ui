import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { useOnClickOutside } from "../hooks";
import Typography from "./Typography";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  WbSunny,
  NightlightRound,
} from "../icons";

const Sidebar = ({
  toggleMenu = false,
  sidebarMenu,
  onSelection = () => {},
  logo,
  theme = "dark",
  onThemeChange = () => {},
  currentNavIndex = { menuIndex: 0, subMenuIndex: 1 },
}) => {
  const [sidebarContent, setSidebarContent] = useState(sidebarMenu);
  const [internalToggleMenu, setInternalToggleMenu] = useState(toggleMenu);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [currentNav, setCurrentNav] = useState(currentNavIndex);
  const sidebarRef = useRef(null);
  const themeRef = useRef(null);

  useOnClickOutside(
    sidebarRef,
    () => setInternalToggleMenu(false),
    true,
    themeRef
  );

  const Logo = logo;

  useEffect(() => {
    setInternalToggleMenu(toggleMenu);
  }, [toggleMenu]);

  const handleParentNav = (e, menuIndex, toggleMenu = true) => {
    e.stopPropagation();
    !internalToggleMenu &&
      toggleMenu &&
      setInternalToggleMenu(!internalToggleMenu);
    const updatedSidebarContent = sidebarContent.reduce(
      (acc, current, index) => {
        if (index === menuIndex) {
          acc.push({ ...current, hide: false });
        } else acc.push({ ...current, hide: true });
        return acc;
      },
      []
    );
    setSidebarContent(updatedSidebarContent);
  };

  const handleSidebar = (e, menuIndex, subMenuIndex) => {
    e.stopPropagation();
    if (
      subMenuIndex !== currentNav.subMenuIndex ||
      menuIndex !== currentNav.menuIndex
    ) {
      onSelection(menuIndex, subMenuIndex);
      setCurrentNav({ menuIndex, subMenuIndex });
      handleParentNav(e, menuIndex, false);
    }
  };

  const handleTheme = (e, changedTheme) => {
    e.stopPropagation();
    setCurrentTheme(changedTheme);
    onThemeChange && onThemeChange(changedTheme);
  };

  return (
    <div
      className={classnames("harsh-ui-sidebar", {
        "harsh-ui-sidebar__open": internalToggleMenu,
      })}
    >
      <nav
        className={classnames("harsh-ui-sidebar__nav", {
          "harsh-ui-sidebar__nav--open": internalToggleMenu,
        })}
        ref={sidebarRef}
      >
        <ul className="harsh-ui-sidebar__menu">
          <li>
            <Logo width={44} height={44} />
          </li>
          {sidebarContent.map((menu, menuIndex) => (
            <li key={menuIndex} onClick={(e) => handleParentNav(e, menuIndex)}>
              <span
                className={classnames("harsh-ui-listContainer", {
                  "harsh-ui-listContainer--active":
                    menuIndex === currentNav.menuIndex,
                })}
              >
                <span className="harsh-ui-listContainer__icon">
                  {menu.icontype}
                </span>
                {internalToggleMenu && (
                  <div className="harsh-ui-listContainer__text">
                    <Typography
                      component="body2"
                      lineHeight="none"
                      textTransform="capitalize"
                      weight="medium"
                    >
                      {menu.title}
                    </Typography>
                    {menu.children.length !== 0 &&
                      (menu.hide ? <ArrowRight /> : <ArrowDown />)}
                  </div>
                )}
              </span>
              {!menu.hide && internalToggleMenu && (
                <ul className="harsh-ui-sidebar__submenu">
                  {menu.children.map((submenu, subMenuIndex) => (
                    <li
                      key={subMenuIndex}
                      className={classnames({
                        "harsh-ui-sidebar__submenu--active":
                          subMenuIndex === currentNav.subMenuIndex &&
                          menuIndex === currentNav.menuIndex,
                      })}
                      onClick={(e) => handleSidebar(e, menuIndex, subMenuIndex)}
                    >
                      <NavLink
                        to={(location) => ({
                          ...location,
                          pathname: `${
                            menu.path === "/" || submenu.isAbsoluteURL
                              ? ""
                              : menu.path
                          }/${submenu.path}`,
                          state: { isAbsoluteURL: submenu.isAbsoluteURL },
                        })}
                      >
                        {submenu.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={classnames("harsh-ui-sidebar__theme", {
          "harsh-ui-sidebar__theme--open": internalToggleMenu,
        })}
        ref={themeRef}
      >
        <div className="harsh-ui-sidebar__theme--container">
          <div
            className={classnames({
              active: currentTheme === "light",
            })}
            onClick={(e) => handleTheme(e, "light")}
          >
            <WbSunny width={20} height={20} />
          </div>
          <div
            className={classnames({
              active: currentTheme === "dark",
            })}
            onClick={(e) => handleTheme(e, "dark")}
          >
            <NightlightRound width={20} height={20} />
          </div>
        </div>
      </div>
      <div
        className={classnames("harsh-ui-sidebar__toggle", {
          "harsh-ui-sidebar__toggle--open": internalToggleMenu,
        })}
        onClick={() => setInternalToggleMenu((toggleMenu) => !toggleMenu)}
      >
        {internalToggleMenu ? (
          <ArrowLeft width={16} height={16} />
        ) : (
          <ArrowRight width={16} height={16} />
        )}
      </div>
    </div>
  );
};
export default Sidebar;
