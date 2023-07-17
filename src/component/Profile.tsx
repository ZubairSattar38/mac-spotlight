import React from "react";

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  heading: string;
  phone: string;
  url: string;
  email: string;
}

interface ProfileProps {
  item: Item | null;
}

const classes = {
  profileContainer: "flex-col gap-4",
  itemContainer: "border border-gray-200 p-8 rounded flex flex-col items-center",
  image: "w-20 h-20 rounded-full",
  title: "font-bold",
  detailsContainer: "border border-gray-200 p-8 rounded flex flex-col gap-2",
  phoneDetails: "flex space-x-6 w-full",
  urlDetails: "flex space-x-14 w-full",
  emailDetails: "flex space-x-8 w-full",
  link: "text-blue-500 hover:text-blue-700",
  button: "bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4 hover:bg-blue-900",
};

const Profile: React.FC<ProfileProps> = ({ item }) => {
  return (
    item && (
      <div className={classes.profileContainer}>
        <div className={classes.itemContainer}>
          <img
            src={item?.imageUrl}
            className={classes.image}
          />
          <h2 className={classes.title}>{item?.name}</h2>
          <p>{item?.heading}</p>
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.phoneDetails}>
            <h4 className={classes.title}>Phone</h4>
            <p>{item?.phone}</p>
          </div>

          <div className={classes.urlDetails}>
            <h4 className={classes.title}>url</h4>
            <a href={item?.url} className={classes.link}>
              <p>{item?.url}</p>
            </a>
          </div>

          <div className={classes.emailDetails}>
            <h4 className={classes.title}>Email</h4>
            <a
              href={`mailto:${item?.email}`}
              className={classes.link}
            >
              <p>{item?.email}</p>
            </a>
          </div>

          <button className={classes.button}>
            Send Message
          </button>
        </div>
      </div>
    )
  );
};

export default Profile;
