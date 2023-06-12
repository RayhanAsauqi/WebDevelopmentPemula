// Tambahkan kode JavaScript kalian di file ini 
const handleGetFormData = () =>({
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    city : document.getElementById("city").value,
    zipCode : document.getElementById("zip-code").value,
    status : document.getElementById("status").checked
    
    
})

function isNumber(num){
    if(isNaN(num)){
        return false;
    }else{
        return true
    };
};

function checkboxIsChecked(){
   if(handleGetFormData().status){
       return true
   }else{
       return false
   }
    
}

function validateFormData(objek) {
if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
return true;
}
return false;
}
 

const submit = () => {
    if (!validateFormData(handleGetFormData())) {
        return document.getElementById('warning').innerText = 'Periksa form anda sekali lagi'
    } {
        return document.getElementById('warning').innerText = ''
    }

}

document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault();
    submit()
})

