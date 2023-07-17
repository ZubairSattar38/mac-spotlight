import Search from "./component/Search";

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  heading: string;
  phone: string;
  url: string;
  email: string;
}

const classes = {
  appContainer: "bg-slate-200  flex flex-col justify-center h-screen",
};

const styles = {
  appContainer: {
    backgroundImage: `url(https://e0.pxfuel.com/wallpapers/79/403/desktop-wallpaper-macos-sierra-high-quality.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function App() {
  const items: Item[] = [
    {
      id: 1,
      name: "Benjamin Russel",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/009/397/835/original/man-avatar-clipart-illustration-free-png.png",
      heading: "designer",
      phone: "23-234-123213",
      url: "example.com",
      email: "example@gmail.com",
    },
    {
      id: 2,
      name: "John",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
      heading: "Developer",
      phone: "23-435345-123213",
      url: "check.com",
      email: "testing@gmail.com",
    },
    {
      id: 3,
      name: "Michael",
      imageUrl:"https://static.vecteezy.com/system/resources/previews/009/397/835/original/man-avatar-clipart-illustration-free-png.png",
      heading: "Quality Assurance",
      phone: "23-435345-23424",
      url: "testing.com",
      email: "testing@gmail.com",
    },
    {
      id: 4,
      name: "Zubair",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
      heading: "Developer",
      phone: "23-435345-23424",
      url: "zubairsattar.com",
      email: "zubairsattar78@gmail.com",
    },
    // ... more items ...
  ];
  
  return (
    <div
      className={classes.appContainer}
      style={styles.appContainer}
    >
      <Search items={items} />
    </div>
  );
}

export default App;
