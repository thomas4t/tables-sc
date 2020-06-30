import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";

import RatioTable from "./components/RatioTable";
import Description from "./components/Description";
import Results from "./components/Results";

import styled from "styled-components";

const MyDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5%;
  text-align: center;
  color: #000;
  * {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
  }
  table,
  p {
    margin: 0 !important;
  }

  .MuiTypography-subtitle1,
  .MuiTypography-subtitle2 {
    font-size: 1.1rem;
  }
`;

function App() {
  const [desiredWeight, setDesiredWeight] = React.useState(null);
  const [epoValue, setEpoValue] = React.useState(100);
  const [hardenerValue, setHardenerValue] = React.useState(10);
  const [epoRatio, setEpoRatio] = React.useState(null);
  const [hardenerRatio, setHardenerRatio] = React.useState(null);

  const handleDesiredWeightChange = (event) => {
    if (event.target.value < 0) {
      setDesiredWeight(0);
    } else {
      setDesiredWeight(event.target.value);
    }
  };
  const handleEpoValueChange = (event) => {
    if (event.target.value < 0) {
      setEpoValue(0);
    } else {
      setEpoValue(event.target.value);
    }
  };
  const handleHardenerValueChange = (event) => {
    if (event.target.value < 0) {
      setHardenerValue(0);
    } else {
      setHardenerValue(event.target.value);
    }
  };

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  };

  const determineRenderOfResults = () => {
    if (epoRatio === 0 || hardenerRatio === 0) {
      return false;
    } else {
      if (Number.isNaN(epoRatio) || Number.isNaN(hardenerRatio)) {
        return false;
      } else {
        return true;
      }
    }
  };

  React.useEffect(() => {
    let totalParts = epoValue * 1 + hardenerValue * 1;
    setEpoRatio(roundToTwo((desiredWeight / totalParts) * epoValue));
    setHardenerRatio(roundToTwo((desiredWeight / totalParts) * hardenerValue));
  }, [desiredWeight, epoValue, hardenerValue]);

  return (
    <MyDiv>
      <Typography variant="h4" component="h1" color="textPrimary" gutterBottom>
        Výpočet poměru epoxidové pryskyřice
      </Typography>
      <div style={{ margin: "auto", width: "90%", maxWidth: "750px" }}>
        <Description />
        <RatioTable
          desiredWeight={desiredWeight}
          epoValue={epoValue}
          hardenerValue={hardenerValue}
          handleDesiredWeightChange={handleDesiredWeightChange}
          handleEpoValueChange={handleEpoValueChange}
          handleHardenerValueChange={handleHardenerValueChange}
        />
      </div>
      {determineRenderOfResults() ? (
        <Results
          desiredWeight={desiredWeight}
          epoValue={epoValue}
          hardenerValue={hardenerValue}
          epoRatio={epoRatio}
          hardenerRatio={hardenerRatio}
        />
      ) : (
        <Typography variant="subtitle1" component="p">
          Pro výpočet doplňte všechny potřebné informace.
        </Typography>
      )}
    </MyDiv>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
