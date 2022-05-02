// const id = document.querySelector('#id'),
//     pwd = document.querySelector('#password'),
//     btn = document.querySelector('button');

// btn.addEventListener('click', login);

// function login() {
//     const req = {
//         id: id.value,
//         password: pwd.value
//     };
//     console.log("======>");
//     fetch('/login', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(req)//객체를 json으로 바꿈
//     })
//         .then((res) => window.location.href('/main'))
//         .catch((err) => {
//             //console.error(new Error(err))
//         })
// }

