const btnAdd = document.querySelector("#addBtn"); // Pega o botão

btnAdd.addEventListener("click", function () {
  // Verifica se o input está vazio 
const inputValue = document.querySelector("#myInput").value;
if (inputValue === "") {
  alert("Você deve digitar algum texto para adicionar!");
} else {
  document.querySelector("#mensagem-ok").insertAdjacentHTML(
      "afterend",
      `<div class="card-teste">
    <span>LOGIN EFETUADO COM SUCESSO</span>
    </div>
    `
    );  
    
    const mensagem = document.querySelector('.card-teste');
    
    setTimeout(() => {
mensagem.style.display = "none";
    }, 3000);
}
document.querySelector("#myInput").value = ""; 

});