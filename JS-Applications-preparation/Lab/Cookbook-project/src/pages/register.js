import { register } from "../api.js";

const rootElem = document.querySelector('.root');
const registerElem = rootElem.querySelector('.register-page');
const registerForm = registerElem.querySelector('form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const registerData = {
        email: formData.get('email'),
        password: formData.get('password'),
        rePass: formData.get('rePass')
    }

    register(registerData.email, registerData.password, registerData.rePass);
});

export function renderRegister() {
    registerElem.style.display = 'block';
}