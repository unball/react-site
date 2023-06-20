import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faEye,
  faPrint,
  faWifi,
  fas,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faWifi, faEye, faPrint, faBrain);

const AreasListDescription = [
  {
    icon: (
      <FontAwesomeIcon icon="fa-solid fa-wifi" color="#EF6F1E" fontSize="4em" />
    ),
    title: "Comunicação sem fio",
    description:
      "Os comandos necessários para a movimentação dos nossos robôs são enviados utilizando comunicação sem fio.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="fa-solid fa-eye"
        color="#EF6F1E"
        fontSize="4.5em"
      />
    ),
    title: "Visão Computacional",
    description:
      "A visão computacional é responsável pela obtenção da localização dos agentes envolvidos no jogo.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="fa-solid fa-print"
        color="#EF6F1E"
        fontSize="5em"
      />
    ),
    title: "Prototipagem e Impressão 3D",
    description: "Nossos robôs são prototipados e impressos em impressoras 3D.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="fa-solid fa-brain"
        color="#EF6F1E"
        fontSize="5em"
      />
    ),
    title: "Inteligência Artificial",
    description:
      "Para que seja possível que os robôs joguem uma partida de futebol de forma autônoma é necessário implementar algoritimos de inteligência artificial. ",
  },
];

export default AreasListDescription;
