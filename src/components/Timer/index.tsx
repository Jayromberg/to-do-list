import Button from "../Button";
import Clock from "./Clock";
import TimerStyle from "./styles";

export default function Timer() {
  return(
    <TimerStyle>
      <p className="titulo">Escolha um card e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <Clock/>
      </div>
      <Button>
        Iniciar!
      </Button>
    </TimerStyle>
  )
}
