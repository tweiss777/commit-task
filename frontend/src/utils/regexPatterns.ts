      // todo remove mock when ready for deployment
export default {
    password: /^(?=.*[A-Z])(?=.*[\W_]).{6,12}$/,
    name: /^[a-zA-Z]{1,32}$/,
    phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
}; 
