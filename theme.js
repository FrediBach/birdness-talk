const yellow = "#fd0";

export default {
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono",
  fonts: {
    body: '"Roboto Condensed", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: "#333",
    background: "#9abbcd",
    primary: "#333",
  },
  text: {
    heading: {
      textTransform: "uppercase",
    },
  },
  styles: {
    h1: {
      fontSize: "64px",
      padding: "28px 144px 16px 144px",
      margin: 0,
      width: "100vw",
    },
    blockquote: {
      fontSize: "38px",
      margin: "28px 144px",
      borderLeft: "12px #fff dotted",
      width: "calc(100vw - 288px)",
    },
    p: {
      fontSize: "38px",
      padding: "28px 144px",
      margin: 0,
      width: "100%",
    },
    em: {
      background: "rgba(255,255,255,0.3)",
      display: "inline-block",
      borderRadius: "4px",
      margin: "6px 0 6px 18px",
      padding: "0 4px",
    },
    ul: {
      fontSize: "32px",
      padding: "24px 144px",
      margin: 0,
      listStyle: "none",
      width: "100vw",
    },
    li: {
      borderLeft: "12px #fff dotted",
      paddingLeft: "24px",
      marginBottom: "32px",
    },
    img: {
      borderRadius: "16px",
      height: "300px",
    },
  },
};
