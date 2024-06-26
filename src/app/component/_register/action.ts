// 'use server'
// import { redirect } from "next/navigation";
// export async function createUser(formData: FormData) {

//     const rawFormData = {
//         username: formData.get('username'),
//         phone: formData.get('phone'),
//         password: formData.get('password'),
//         code: formData.get('code'),
//         role: Boolean(formData.get('false'))
//     }
//     const confirm = formData.get('confirm')
//     if (confirm === rawFormData.password) {
//         const response = await fetch(`http://localhost:8000/users`, {
//             method: 'POST',
//             body: JSON.stringify(rawFormData),
//             headers: {

//                 'Content-Type': 'application/json',
//             },
//         })
//         if (!response.ok) {
//             throw new Error('response fail')
//         } else {
//             redirect('/my-car')
//         }

//     } else {
//         console.log('fail');
//     }

//     // try {

//     //     const response = await fetch(`http://localhost:8000/users`, {
//     //         method: 'POST',
//     //         body: JSON.stringify(rawFormData),
//     //         headers: {

//     //             'Content-Type': 'application/json',
//     //         },
//     //     })
//     //     if (!response.ok) {
//     //         throw new Error('response fail')
//     //     }
//     //     const data = await response.json();
//     //     redirect('/main-child1')


//     // } catch (error) {
//     //     console.error(error)
//     // }
// }