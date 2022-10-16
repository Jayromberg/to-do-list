import Button from "../Button";
import Clock from "./Clock";
import TimerStyle from "./styles";
import { timeToSeconds } from "../../common/utils/time";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../contexts/GlobalStateContext";

export default function Timer() {
  const { selected } = useContext(GlobalStateContext);
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected])

  return(
    <TimerStyle>
      <p className="titulo">Escolha um card e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <Clock time={time}/>
      </div>
      <Button>
        Iniciar!
      </Button>
    </TimerStyle>
  )
}
