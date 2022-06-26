import { styled } from "../../stitches.config";

export const Container = styled("main", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "10px 20px",

  div: {
    width: "800px",
  },
});

export const List = styled("ul", {
  display: "flex",
  gap: "20px",
  padding: "0",

  variants: {
    type: {
      summary: {
        flexDirection: "column",

        "& li": {
          alignItems: "center",
          color: "#000",
          display: "flex",
          justifyContent: "space-between",

          div: {
            flex: "1",
          },
        },
      },
    },
  },
});

export const ListItem = styled("li", {
  backgroundColor: "$white",
  color: "$black200",
  flex: 1,
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",

  h3: {
    marginTop: 0,
  },
  span: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  variants: {
    backgroundColor: {
      total: {
        backgroundColor: "$red",
        color: "$white200",
      },
    },
    type: {
      income: {
        span: {
          color: "$success",
        },
      },
      outcome: {
        span: {
          color: "$danger",
        },
      },
    },
  },
});
