document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById('button1');
    button.addEventListener('click', () => {
        valImie();
        valNazwisko();
        valNumer();
        valPassword();
        valPowtPasswd();
        valEmail(); 
       });
});

function valImie(){
            var fname = document.getElementById('fname');
            var pole1 = document.getElementById('pole1');
            if (fname.value === '') {
                pole1.textContent = 'Pole dla imienia nie jest wypełnione';
            } else if(fname.value.length < 3) {
                pole1.textContent = 'pole ma byc większe od 3 ';
            }
            else{
                pole1.textContent = ''
            }}
        
function valNazwisko(){
            var lname = document.getElementById('lname');   
            var pole2 = document.getElementById('pole2');
            if (lname.value === '') {
            pole2.textContent = 'Pole dla nazwiska nie jest wypełnione';
            } else if(lname.value.length < 3 ) {
                pole2.textContent = 'pole ma byc większe od 3 ';
            }
            else{
                pole2.textContent = ' '
            }}
        
function valNumer(){
            var numer = document.getElementById('telef');
            var pole3 = document.getElementById('pole3');
            if(numer.value === ''){
                pole3.textContent = ' wpisz swoj numer';
            }
            else if (!(/[0-9]/.test(numer.value))) {
                pole3.textContent = 'pole wymaga cyfry';
            }
            else if( numer.value.length < 9 || numer.value.length > 9){
                pole3.textContent = ' za mało lub za dużo wpisałes cyferek'
            }
            else if(numer.value.length === 9 ){
                pole3.textContent = ''
            }}
function valPassword(){
            var password = document.getElementById('passwd')
            var pole4 = document.getElementById('pole4')

                if(password.value === ' '){
                    pole4.textContent = 'pole nie może być puste'
                }
                else if(password.value.length < 9){
                    pole4.textContent = 'haslo ma miec co najmniej 9 znakow'
                }
                else if(!(/[0-9]/.test(password.value) && !/[!@#$%^&*]/.test(password.value))){
                    pole4.textContent = ' pole musi zawierac cyfry i specialni znaki'
                }
                else{
                    pole4.textContent  = ''
                }

                
            }
function valPowtPasswd(){
            var powtpaswd = document.getElementById('powthaslo')
            var pole5 = document.getElementById('pole5')
                  if(powtpaswd === ' '){
                    pole5.textContent = ' pole nie moze byc puste'
                }

                if(powtpaswd.value != password.value){
                    pole5.textContent = 'hasła są nie tymi samymi'
                }
                else{
                    pole5.textContent = ' '
                }
        }
function valEmail(){
    var email = document.getElementById('email')
    var pole6 = document.getElementById("pole6")

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailPattern.test(email.value)){
                    pole6.textContent = "Nieprawidłowy adres email"
                }
                else{
                    pole6.textContent = ""
                }
        }
