input_fecha = document.querySelector("#input-date");
input_vehiculo = document.querySelector("#input-vehiculo");
input_test = document.querySelector("#input-test");
input_excusa = document.querySelector("#input-excusa");
input_submit = document.querySelector("#input-submit");
label_test = document.querySelector("#test-alcoholemia");
div_formulario = document.querySelector(".formulario");

gramos_por_litro = Math.random() * 3;
gramos_por_litro = gramos_por_litro.toFixed(2);

function test_alcoholemia() {
  input_test.remove(); //borramos el boton
  parrafo_gramos_por_litro = document.createElement("p"); //creamos un parrafo y lo guardamos en una variable
  parrafo_gramos_por_litro.innerHTML =
    "El test dió: " + gramos_por_litro + " g/l de alcohol en sangre"; //le agregamos contenido
  label_test.appendChild(parrafo_gramos_por_litro); //metemos el elemento en el documento
}

function mostrar_resultado(aprobado){
    resultado = document.createElement("h2")
    if (aprobado){
        resultado.innerHTML = "Podes manejar"
        div_formulario.classList.add("aprobado")
    }
    else{
        resultado.innerHTML = "No podes manejar"
        div_formulario.classList.add("desaprobado")
    }
    div_formulario.appendChild(resultado)
}
function chequear_idoneidad(){
    input_submit.remove()
    año = input_fecha.value.split("-")[0]
    vehiculo = input_vehiculo.value
   if (año > 2022 && gramos_por_litro > 0 )
{  mostrar_resultado(false)}
else if(año < 2022 && gramos_por_litro > 0.5)
{  mostrar_resultado(false)}
else if(gramos_por_litro > 0.2 && vehiculo == 2)
{  mostrar_resultado(false)}
else if(gramos_por_litro < 0.2 && vehiculo == 2)
{  mostrar_resultado(true)}
else (gramos_por_litro < 0.5 && vehiculo = 1 || vehiculo = 3 || vehiculo = 4 )
{  mostrar_resultado(true)}
}


input_test.addEventListener("click", test_alcoholemia);
input_submit.addEventListener("click", chequear_idoneidad);