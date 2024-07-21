
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};

/*document.querySelector(#default).addEventListener('click', 
	(event) => {
	document.getElementById('firstNameOutput').innerText = 'Иван';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
	}
);*/