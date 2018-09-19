import * as FileSaver from "file-saver";

const exigences = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXIGENCE":
      return [
        ...state,
        {
          id: action.id,
          text: action.texte,
          severite: action.severite
        }
      ];
    case "REMOVE_EXIGENCE":
      return state.map(
        exigence =>
          exigence.id === action.id ? (exigence = undefined) : exigence
      );

    case "EXPORT_EXIGENCE":
      let exigences = state.map(
        exigence => exigence.text + " / " + exigence.severite + "\r\n"
      );
      var file = new File(exigences, "Liste exigences.txt", {
        type: "text/plain;charset=utf-8"
      });
      FileSaver.saveAs(file);
      console.log(exigences);
    default:
      return state;
  }
};

export default exigences;
