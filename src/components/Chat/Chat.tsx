import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

type Chat = Chats[];

interface Chats {
  id: number;
  name: string;
}

const text = {
  color: "teal",
  fontSize: "16px",
  lineHeight: "24px",
};

export const Chat = () => {
  const userChat: Chat = [
    {
      id: 10,
      name: "First Chat",
    },
    {
      id: 11,
      name: "Second Chat",
    },
    {
      id: 12,
      name: "Third Chat",
    },
  ];

  return (
    <List
      sx={{ width: "200px", height: "100%", bgcolor: "#f3f3f3" }}
      aria-label="contacts"
      subheader={
        <ListSubheader
          sx={{
            bgcolor: "#f3f3f3",
            fontFamily: "Verdana, sans-serif",
            fontSize: "18px",
            fontWeight: "600",
            color: "maroon",
            lineHeight: "35px",
          }}
        > Chats
        </ListSubheader>
      }
    >
      {userChat.map((item) => (
        <ListItemButton key={item.id}  sx={{ padding: 0 }}>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              primary={`${item.name}`}
              primaryTypographyProps={{ style: text }}
            />
          </ListItem>
        </ListItemButton>
      ))}
    </List>
  );
};
