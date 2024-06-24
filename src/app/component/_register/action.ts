'use server'
export async function createUser(formData: FormData) {

    const rawFormData = {
        username: formData.get('username'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        code: formData.get('code'),
        role: Boolean(formData.get('false'))
    }
    try {
        const response = await fetch(`http://localhost:8000/users`, {
            method: 'POST',
            body: JSON.stringify(rawFormData),
            headers: {

                'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error('response fail')
        }
        const data = await response.json();

    } catch (error) {
        console.error(error)
    }
}