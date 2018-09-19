let exigenceId = 0;
export const addExigence = (texte, severite) => {
  return {
    type: "ADD_EXIGENCE",
    id: exigenceId++,
    texte,
    severite
  };
};

export const removeExigence = id => ({
  type: "REMOVE_EXIGENCE",
  id
});

export const exportExigence = () => {
  return {
    type: "EXPORT_EXIGENCE"
  };
};
