// document.getElementById("submit").addEventListener("click", (e) => {
//     e.preventDefault();
//     // получаем данные формы
//     let createForm = document.forms["createForm"];
//     let name = createForm.elements["name"].value;
//     let access = createForm.elements["access"].value;
//     // сериализуем данные в json
//     let create = JSON.stringify({name: name, access: access});
//     let request = new XMLHttpRequest();
//     // посылаем запрос на адрес "/api/create"
//     request.open("POST", "", true);   
//     request.setRequestHeader("Content-Type", "application/json");
//     request.addEventListener("load", function () {
//         // получаем и парсим ответ сервера
//         //let receivedUser = JSON.parse(request.response);
//         //console.log(receivedUser.name, "-", receivedUser.access);   // смотрим ответ сервера
//     });
//     request.send(create);
//     //res.redirect("/api/index");
// });