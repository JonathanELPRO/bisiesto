function determinarBisiesto(anio) {
  if (anio%400===0)
  {
    return "Es bisiesto"
  }
  if (anio%100===0 && anio%400!==0)
  {
    return "No es bisiesto"
  }
  if (anio%4===0 && anio%100!==0)
  {
    return "Es bisiesto"
  }
  if (anio%4!==0){
    return "No es bisiesto"
  }


}

export default determinarBisiesto;
