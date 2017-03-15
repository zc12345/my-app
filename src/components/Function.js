const isEmpty = (errors) =>{
  for (let error in errors){return false;}
  return true;
}

export default isEmpty;