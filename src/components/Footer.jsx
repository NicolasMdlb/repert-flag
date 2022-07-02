const Footer = (props) => {
  const styleDiv = {
    display : "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#a79ab2",
    alignItems: "center",
    height: "3em",
    padding: "1em 2em"
  }

  const styleP = {
    color: "whitesmoke",
    fontSize : "large",
    textAlign: "center"
  }

  return (
    <footer>
      <div style={styleDiv}>
        <p style={styleP}><em>The Country Catalog</em> - {new Date().getFullYear()}</p>
        <p style={styleP}>Created By <em>Mcnitch</em></p>
      </div>
    </footer>
  );
};

export default Footer;