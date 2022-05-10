export const menuItems = [
  {
    title: "Dashboard",
    icon: "./assets/img/ic_dashboard.svg"
  },
  {
    title: "Menu Subcategoría",
    icon: "./assets/img/ic_chat.svg",
    submenu: [
      {
        title: "Subcategoría uno",
      },
      {
        title: "Subcategoría 2",
      },
    ],
  },
  {
    title: "Menu multinivel",
    icon: "./assets/img/ic_calendar.svg",
    submenu: [
      {
        title: "Nivel 2a",
      },
      {
        title: "Nivel 2b",
        submenu: [
          {
            title: "Nivel 2b 1",
            icon: "./assets/img/ic_user.svg",
          },
          {
            title: "Nivel 2b 2",
            icon: "./assets/img/ic_mail.svg",
            submenu: [
              {
                title: "Nivel 2b 2a"
              },
              {
                title: "Nivel 2b 2b"
              },
              {
                title: "Etc..."
              },
            ],
          },
        ],
      },
      {
        title: "Nivel 2c"
      },
    ],
  },
  {
    title: "Analytics",
    icon: "./assets/img/ic_analytics.svg"
  },
  {
    title: "Chat",
    icon: "./assets/img/ic_chat.svg",
    alerts: 3
  },
  {
    title: "Mail",
    icon: "./assets/img/ic_mail.svg"
  },
  {
    title: "User",
    icon: "./assets/img/ic_user.svg"
  },
  
];
