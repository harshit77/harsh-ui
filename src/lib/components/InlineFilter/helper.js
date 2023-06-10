const getDropdownText = (list, selectedOption) => {
  const findSelectedOption = list.find((item) => item.id === selectedOption);
  return findSelectedOption?.value ?? " ";
};

export { getDropdownText };
