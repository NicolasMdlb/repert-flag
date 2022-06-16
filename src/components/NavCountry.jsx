import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const NavCountry = (props) => {

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {props.continents.map((c) => {
          return <Button key={c} onClick={() => props.changeRegion(c === "Tous" ? null : c)}>{c}</Button>;
        })}
      </ButtonGroup>
    </>
  );
};

export default NavCountry;
